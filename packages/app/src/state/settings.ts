import { atom } from 'recoil';
import { persistAtom } from './persist.js';
import { type Settings } from '@ironclad/rivet-core';
import { isInTauri } from '../utils/tauri';
import { DEFAULT_CHAT_NODE_TIMEOUT } from '../../../core/src/utils/defaults';

export const settingsState = atom<Settings>({
  key: 'settings',
  default: {
    recordingPlaybackLatency: 1000,

    openAiKey: '',
    openAiOrganization: '',
    openAiEndpoint: '',
    chatNodeTimeout: DEFAULT_CHAT_NODE_TIMEOUT,

    pluginEnv: {},
    pluginSettings: {},
  },
  effects_UNSTABLE: [persistAtom],
});

export const themes = [
  {
    label: 'Molten',
    value: 'molten',
  },
  {
    label: 'Grapefruit',
    value: 'grapefruit',
  },
  {
    label: 'Taffy',
    value: 'taffy',
  },
] as const;

export type Theme = (typeof themes)[number]['value'];

export const themeState = atom<Theme>({
  key: 'theme',
  default: 'molten',
  effects_UNSTABLE: [persistAtom],
});

export const recordExecutionsState = atom<boolean>({
  key: 'recordExecutions',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const defaultExecutorState = atom<'browser' | 'nodejs'>({
  key: 'defaultExecutor',
  default: 'browser',
  effects_UNSTABLE: [persistAtom],
});

export const executorOptions = isInTauri()
  ? ([
      { label: 'Browser', value: 'browser' },
      { label: 'Node', value: 'nodejs' },
    ] as const)
  : ([{ label: 'Browser', value: 'browser' }] as const);

export const previousDataPerNodeToKeepState = atom<number>({
  key: 'previousDataPerNodeToKeep',
  default: -1,
  effects_UNSTABLE: [persistAtom],
});

export const checkForUpdatesState = atom<boolean>({
  key: 'checkForUpdates',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const skippedMaxVersionState = atom<string | undefined>({
  key: 'skippedMaxVersion',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const updateModalOpenState = atom<boolean>({
  key: 'updateModalOpen',
  default: false,
});

export const updateStatusState = atom<string | undefined>({
  key: 'updateStatus',
  default: undefined,
});

export const zoomSensitivityState = atom<number>({
  key: 'zoomSensitivity',
  default: 0.25,
  effects_UNSTABLE: [persistAtom],
});
