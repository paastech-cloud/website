import { ProjectStatus } from '@/typings/project.type';

export const getColorFromStatus = (projectStatus: ProjectStatus) => {
  switch (projectStatus) {
    case ProjectStatus.STATUS_STARTING:
      return 'blue.500';
    case ProjectStatus.STATUS_RUNNING:
      return 'green.500';
    case ProjectStatus.STATUS_STOPPING:
      return 'orange.500';
    case ProjectStatus.STATUS_STOPPED:
      return 'red.500';
    default:
      return 'black';
  }
};
