export type AccentKey = 'green' | 'purple' | 'blue' | 'pink' | 'orange';

export interface AccentDefinition {
  key: AccentKey;
  label: string;
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export const accents: Record<AccentKey, AccentDefinition> = {
  green: {
    key: 'green',
    label: 'Neon Green',
    main: '#2ee6a6',
    light: '#6ffcc4',
    dark: '#1fae7d',
    contrastText: '#04120c',
  },
  purple: {
    key: 'purple',
    label: 'Neon Purple',
    main: '#b16bff',
    light: '#cf9dff',
    dark: '#8a3ff0',
    contrastText: '#100822',
  },
  blue: {
    key: 'blue',
    label: 'Neon Blue',
    main: '#3fb8ff',
    light: '#7cd2ff',
    dark: '#1a8fe0',
    contrastText: '#04141f',
  },
  pink: {
    key: 'pink',
    label: 'Neon Pink',
    main: '#ff5fa8',
    light: '#ff94c5',
    dark: '#e0357f',
    contrastText: '#210410',
  },
  orange: {
    key: 'orange',
    label: 'Neon Orange',
    main: '#ff9640',
    light: '#ffb977',
    dark: '#e0721a',
    contrastText: '#1f0f00',
  },
};

export const accentOrder: AccentKey[] = ['green', 'purple', 'blue', 'pink', 'orange'];
