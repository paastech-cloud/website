import { create } from 'zustand';
import { ProjectStatus, ProjectType } from '@/typings/project.type';
import { getProjectFromId } from '@helper/api/getProjectFromId';
import { projectsApi } from '@/api/api';
import { ConfigType } from '@/typings/config.type';

type State = {
  currentProject: ProjectType;
};

type Action = {
  refreshCurrentProject: (id: string) => Promise<ProjectType>;
  updateConfig: (config: ConfigType) => Promise<void>;
};

export const useProjectStore = create<State & Action>((set, get) => ({
  currentProject: {
    id: '',
    name: '',
    status: ProjectStatus.STATUS_UNKNOWN,
    config: {},
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  refreshCurrentProject: async (id) => {
    const project = await getProjectFromId(id);
    if (null === project) throw new Error(`No project found with this ID`);
    set({ currentProject: project });

    return project;
  },
  updateConfig: async (config) => {
    if (undefined === config.env) return;

    // Array to Record<string, string>
    const envVars: Record<string, string> = config.env.reduce((result, { envKey, value }) => ({ ...result, [envKey]: value }), {});
    set((state) => ({ ...state, currentProject: { ...state.currentProject, config } }));

    await projectsApi.projectsControllerDeploy(get().currentProject.id, { env_vars: envVars });
  },
}));
