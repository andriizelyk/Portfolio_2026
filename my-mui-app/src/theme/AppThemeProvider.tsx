import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider, createTheme, type PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { accents, type AccentKey } from './accents';
import { buildCssVariables } from './cssVariables';

interface AppThemeContextValue {
  mode: PaletteMode;
  toggleMode: () => void;
  accentKey: AccentKey;
  setAccentKey: (key: AccentKey) => void;
}

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export const useAppTheme = () => {
  const ctx = useContext(AppThemeContext);
  if (!ctx) throw new Error('useAppTheme must be used within AppThemeProvider');
  return ctx;
};

const STORAGE_MODE_KEY = 'portfolio-theme-mode';
const STORAGE_ACCENT_KEY = 'portfolio-theme-accent';

function readStoredMode(): PaletteMode {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_MODE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

function readStoredAccent(): AccentKey {
  if (typeof window === 'undefined') return 'green';
  const stored = window.localStorage.getItem(STORAGE_ACCENT_KEY) as AccentKey | null;
  return stored && stored in accents ? stored : 'green';
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(readStoredMode);
  const [accentKey, setAccentKeyState] = useState<AccentKey>(readStoredAccent);

  const setAccentKey = (key: AccentKey) => {
    setAccentKeyState(key);
    window.localStorage.setItem(STORAGE_ACCENT_KEY, key);
  };

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(STORAGE_MODE_KEY, next);
      return next;
    });
  };

  const cssVariables = useMemo(() => buildCssVariables(mode, accents[accentKey]), [mode, accentKey]);

  const theme = useMemo(() => {
    const accent = accents[accentKey];

    return createTheme({
      palette: {
        mode,
        primary: {
          main: accent.main,
          light: accent.light,
          dark: accent.dark,
          contrastText: accent.contrastText,
        },
        secondary: {
          main: accent.light,
        },
        background: { default: cssVariables['--color-bg-default'], paper: cssVariables['--color-bg-paper'] },
        text: { primary: cssVariables['--color-text-primary'], secondary: cssVariables['--color-text-secondary'] },
        divider: cssVariables['--color-divider'],
      },
      shape: { borderRadius: 14 },
      typography: {
        fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
        h1: { fontWeight: 800 },
        h2: { fontWeight: 800 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 700 },
        button: { textTransform: 'none', fontWeight: 600 },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'var(--color-surface-translucent)',
              borderBottom: '1px solid var(--color-divider)',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: { borderRadius: 10 },
          },
          variants: [
            {
              props: { variant: 'contained', color: 'primary' },
              style: {
                boxShadow: 'var(--shadow-glow-button)',
                '&:hover': {
                  boxShadow: 'var(--shadow-glow-button-hover)',
                },
              },
            },
          ],
        },
        MuiChip: {
          styleOverrides: {
            root: { borderRadius: 8, fontWeight: 600, cursor: 'pointer' },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: { boxShadow: 'var(--shadow-glow-portrait)' },
          },
        },
      },
    });
  }, [mode, accentKey, cssVariables]);

  return (
    <AppThemeContext.Provider value={{ mode, toggleMode, accentKey, setAccentKey }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ ':root': cssVariables }} />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
