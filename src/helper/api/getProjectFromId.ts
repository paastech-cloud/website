import { projectsApi } from '@/api/api';
import { ApiProjectStatus, ApiProjectType, ProjectType } from '@/typings/project.type';
import { getProjectsStatus } from '@helper/api/getProjectsStatus';
import { mergeApiProjectWithStatus } from '@helper/api/mergeApiProjectWithStatus';

export const getProjectFromId = async (id: ProjectType['id']): Promise<ProjectType | null> => {
  const apiProject = await projectsApi
    .projectsControllerFindOne(id)
    .then((response) => {
      const content = response.data.content as ApiProjectType;
      if (!content) return null;
      return content;
    })
    .catch(() => null);
  if (null === apiProject) return null;

  const statuses = await getProjectsStatus([apiProject.id]);
  const defaultStatus: ApiProjectStatus = {
    container_name: apiProject.id,
    container_status: 'STATUS_UNKNOWN',
  };

  return mergeApiProjectWithStatus(apiProject, statuses.at(0) ?? defaultStatus);
};
