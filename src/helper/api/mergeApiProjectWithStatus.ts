import { ApiProjectStatus, ApiProjectType, ProjectStatus, ProjectType } from '@/typings/project.type';
import { EnvVariableType } from '@/typings/config.type';

export const mergeApiProjectWithStatus = (project: ApiProjectType, status?: ApiProjectStatus): ProjectType => {
  let env: EnvVariableType[] = [];
  if (project.config.env) {
    // Record<string, string> to Array
    env = Object.entries(project.config.env)
      .map(([envKey, value]) => ({ envKey, value }))
      .sort((a, b) => a.envKey.localeCompare(b.envKey));
  }

  return {
    id: project.id,
    name: project.name,
    config: { env },
    status: ProjectStatus[status?.container_status ?? 'STATUS_UNKNOWN'],
    updatedAt: project.updatedAt,
    createdAt: project.createdAt,
  };
};
