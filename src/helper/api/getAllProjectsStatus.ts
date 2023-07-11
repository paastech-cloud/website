import { projectsApi } from '@/api/api';
import { getProjectsStatus } from '@helper/api/getProjectsStatus';
import { mergeApiProjectWithStatus } from '@helper/api/mergeApiProjectWithStatus';
import { ApiProjectType, ProjectType } from '@/typings/project.type';

export const getAllProjectsStatus = async (): Promise<ProjectType[]> => {
  // Fetch all user's projects
  const apiProjects: ApiProjectType[] = await projectsApi
    .projectsControllerFindAll()
    .then((response) => {
      const content = response.data.content as ApiProjectType[];
      if (!content) return [];
      return content;
    })
    .catch(() => []);
  if (apiProjects.length === 0) return [];

  // Fetch all project's statuses
  const projectsUuid = apiProjects.map((projectApi) => projectApi.id);
  const statuses = await getProjectsStatus(projectsUuid);

  // Merge these two arrays
  return apiProjects.map((project) => {
    const status = statuses.find(({ container_name }) => container_name === project.id);

    return mergeApiProjectWithStatus(project, status);
  });
};
