import { ApiConfigType, ConfigType } from '@/typings/config.type';

export type ApiProjectType = {
  id: string;
  name: string;
  config: ApiConfigType;
  createdAt: string;
  updatedAt: string;
};

export type ProjectType = {
  id: string;
  status: ProjectStatus;
  name: string;
  config: ConfigType;
  updatedAt: string;
  createdAt: string;
};

export type ApiProjectStatus = {
  container_name: string;
  container_status: keyof typeof ProjectStatus;
};

export enum ProjectStatus {
  STATUS_UNKNOWN = 'unknown',
  STATUS_STARTING = 'starting',
  STATUS_RUNNING = 'running',
  STATUS_STOPPING = 'stopping',
  STATUS_STOPPED = 'stopped',
}
