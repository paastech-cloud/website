export type ProjectType = {
  uuid: string;
  status: ProjectStatusType;
  name: string;
  latestDeployment: string;
  lastUpdate: string;
};

export type ProjectStatusType = 'created' | 'pending' | 'running' | 'exited';
