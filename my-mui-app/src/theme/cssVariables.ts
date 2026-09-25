import { alpha, type PaletteMode } from '@mui/material/styles';
import { hexToRgbString } from '../utils/color';
import type { AccentDefinition } from './accents';

export function buildCssVariables(mode: PaletteMode, accent: AccentDefinition) {
  const isDark = mode === 'dark';
  const primaryRgb = hexToRgbString(accent.main);

  const bgDefault = isDark ? '#080b10' : '#f5f6f8';
  const bgPaper = isDark ? '#0f1420' : '#ffffff';
  const textPrimary = isDark ? '#f2f4f7' : '#0b0e14';
  const textSecondary = isDark ? '#9aa4b2' : '#5a6472';
  const divider = isDark ? alpha('#ffffff', 0.08) : alpha('#0b0e14', 0.08);

  return {
    '--color-bg-default': bgDefault,
    '--color-bg-paper': bgPaper,
    '--color-text-primary': textPrimary,
    '--color-text-secondary': textSecondary,
    '--color-divider': divider,
    '--color-primary': accent.main,
    '--color-primary-rgb': primaryRgb,
    '--color-primary-light': accent.light,
    '--color-primary-dark': accent.dark,
    '--color-primary-contrast': accent.contrastText,
    '--color-surface-translucent': alpha(bgPaper, isDark ? 0.75 : 0.8),
    '--color-icon-badge-bg': alpha(accent.main, 0.14),
    '--color-chip-badge-bg': alpha(accent.main, isDark ? 0.12 : 0.08),
    '--color-dot-inactive': alpha(textPrimary, 0.2),
    '--shadow-glow-portrait': `0 0 60px ${alpha(accent.main, isDark ? 0.25 : 0.15)}`,
    '--shadow-glow-button': `0 0 24px ${alpha(accent.main, isDark ? 0.45 : 0.25)}`,
    '--shadow-glow-button-hover': `0 0 32px ${alpha(accent.main, isDark ? 0.6 : 0.35)}`,
  } as const;
}

export type CssVariables = ReturnType<typeof buildCssVariables>;
