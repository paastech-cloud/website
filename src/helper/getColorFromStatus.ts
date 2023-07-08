import { ProjectStatus } from '@/typings/project.type';

export const getColorFromStatus = (projectStatus: ProjectStatus) => {
  switch (projectStatus) {
    case ProjectStatus.NO_DEPLOYMENT:
      return 'gray.500';
    case ProjectStatus.STARTING:
      return 'blue.500';
    case ProjectStatus.RUNNING:
      return 'green.500';
    case ProjectStatus.STOPPING:
      return 'orange.500';
    case ProjectStatus.STOPPED:
      return 'red.500';
    default:
      return 'black';
  }
};
