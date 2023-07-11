import { ApiProjectStatus, ApiProjectType, ProjectStatus, ProjectType } from '@/typings/project.type';

export const mergeApiProjectWithStatus = (project: ApiProjectType, status?: ApiProjectStatus): ProjectType => {
  return {
    id: project.id,
    name: project.name,
    config: project.config,
    status: ProjectStatus[status?.container_status ?? 'STATUS_UNKNOWN'],
    updatedAt: project.updatedAt,
    createdAt: project.createdAt,
  };
};
