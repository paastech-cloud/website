import { projectsApi } from '@/api/api';
import { ApiProjectStatus } from '@/typings/project.type';

export const getProjectsStatus = async (containerNames: string[]): Promise<ApiProjectStatus[]> => {
  return projectsApi
    .projectsControllerGetStatus({ container_names: containerNames })
    .then((response) => {
      const { content } = response.data as { content: { container_statuses: ApiProjectStatus[] } };
      if (!content.container_statuses) return [];
      return content.container_statuses;
    })
    .catch(() => []);
};
