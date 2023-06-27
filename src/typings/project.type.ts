export type ProjectType = {
  status: ProjectStatusType;
  name: string;
  latestDeployment: string;
  lastUpdate: string;
};

export type ProjectStatusType = 'pending' | 'running' | 'exited';
