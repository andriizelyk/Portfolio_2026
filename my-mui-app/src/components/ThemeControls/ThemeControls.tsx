import { useState, type CSSProperties, type MouseEvent } from 'react';
import { IconButton, Tooltip, Menu, MenuItem, ListItemIcon } from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import CheckIcon from '@mui/icons-material/Check';
import { useAppTheme } from '../../theme/AppThemeProvider';
import { accentOrder, accents } from '../../theme/accents';
import './ThemeControls.css';

interface ThemeControlsProps {
  direction?: 'row' | 'column';
}

export function ThemeControls({ direction = 'row' }: ThemeControlsProps) {
  const { mode, toggleMode, accentKey, setAccentKey } = useAppTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isColumn = direction === 'column';

  const openAccentMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const closeAccentMenu = () => setAnchorEl(null);

  return (
    <div className={`theme-controls${isColumn ? ' theme-controls--column' : ''}`}>
      <Tooltip title="Accent color" placement={isColumn ? 'left' : 'bottom'}>
        <IconButton onClick={openAccentMenu} size="small">
          <PaletteRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeAccentMenu}
        anchorOrigin={isColumn ? { vertical: 'center', horizontal: 'left' } : undefined}
        transformOrigin={isColumn ? { vertical: 'center', horizontal: 'right' } : undefined}
      >
        {accentOrder.map((key) => {
          const accent = accents[key];
          return (
            <MenuItem
              key={key}
              selected={key === accentKey}
              onClick={() => {
                setAccentKey(key);
                closeAccentMenu();
              }}
            >
              <ListItemIcon>
                <span
                  className="theme-controls__swatch"
                  style={{ '--swatch-color': accent.main } as CSSProperties}
                />
              </ListItemIcon>
              {accent.label}
              {key === accentKey && <CheckIcon fontSize="small" className="theme-controls__check" />}
            </MenuItem>
          );
        })}
      </Menu>

      <Tooltip
        title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        placement={isColumn ? 'left' : 'bottom'}
      >
        <IconButton onClick={toggleMode} size="small">
          {mode === 'dark' ? (
            <LightModeRoundedIcon fontSize="small" />
          ) : (
            <DarkModeRoundedIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
}
