import { create } from 'zustand';
import { ProjectType } from '@/typings/project.type';

type State = {
  projects: ProjectType[];
  currentProject: ProjectType | null;
};

type Action = {
  setProjects: (projects: ProjectType[]) => void;
  setCurrentProject: (project: ProjectType) => void;
};

export const useProjectStore = create<State & Action>((set) => ({
  projects: [],
  currentProject: null,
  setProjects: () => set((state) => ({ ...state })),
  setCurrentProject: () => set((state) => ({ ...state })),
}));
