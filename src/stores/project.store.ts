import { create } from 'zustand';
import { ProjectStatus, ProjectType } from '@/typings/project.type';

type State = {
  currentProject: ProjectType;
};

type Action = {
  setCurrentProject: (project: ProjectType) => void;
};

export const useProjectStore = create<State & Action>((set) => ({
  currentProject: {
    id: '',
    name: '',
    status: ProjectStatus.STATUS_UNKNOWN,
    config: {},
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  setCurrentProject: (project: ProjectType) => set((state) => ({ ...state, currentProject: project }), true),
}));
