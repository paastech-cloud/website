export type ProjectType = {
  uuid: string;
  status: ProjectStatus;
  name: string;
  currentDeployment: string;
  lastActivity: string;
};

export enum ProjectStatus {
  UNKNOWN = 'unknown',
  NO_DEPLOYMENT = 'no deployment',
  STARTING = 'starting',
  RUNNING = 'running',
  STOPPING = 'stopping',
  STOPPED = 'stopped',
}
