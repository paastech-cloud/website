import { ApiProjectStatus, ApiProjectType, ProjectStatus, ProjectType } from '@/typings/project.type';
import { projectsApi } from '@/api/api';

export const getAllProjectsStatus = async (): Promise<ProjectType[]> => {
  // Fetch all user's projects
  const apiProjects: ApiProjectType[] = await projectsApi
    .projectsControllerFindAll()
    .then((response) => {
      const data = response.data as { content: ApiProjectType[] };
      if (!data.content) return [];
      return data.content;
    })
    .catch(() => []);

  const projectsUuid = apiProjects.map((projectApi) => projectApi.id);

  // Fetch all project's statuses
  const statuses: ApiProjectStatus[] = await projectsApi
    .projectsControllerGetStatus({ container_names: projectsUuid })
    .then((response) => {
      const { content } = response.data as { content: { container_statuses: ApiProjectStatus[] } };
      if (!content.container_statuses) return [];
      return content.container_statuses;
    })
    .catch(() => []);

  return apiProjects.map((project) => {
    const status = statuses.find(({ container_name }) => container_name === project.id);

    return mergeApiProjectWithStatus(project, status);
  });
};

const mergeApiProjectWithStatus = (project: ApiProjectType, status?: ApiProjectStatus): ProjectType => {
  return {
    id: project.id,
    name: project.name,
    config: project.config,
    status: ProjectStatus[status?.container_status ?? 'STATUS_UNKNOWN'],
    updatedAt: project.updatedAt,
    createdAt: project.createdAt,
  };
};
