import type { CSSProperties } from 'react';
import { Chip } from '@mui/material';
import { getTechColorVars } from './techColors';
import './TechChip.css';

export type TechChipSize = 'small' | 'normal' | 'large';

interface TechChipProps {
  tType: string;
  tSize?: TechChipSize;
}

export function TechChip({ tType, tSize = 'normal' }: TechChipProps) {
  const { color, rgb } = getTechColorVars(tType);

  return (
    <Chip
      label={tType}
      variant="outlined"
      className={`tech-chip tech-chip--${tSize}`}
      style={{ '--tech-color': color, '--tech-color-rgb': rgb } as CSSProperties}
    />
  );
}
