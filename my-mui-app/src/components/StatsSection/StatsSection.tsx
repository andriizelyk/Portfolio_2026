import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { stats } from '../../data/portfolio';
import './StatsSection.css';

const iconMap = {
  work: WorkRoundedIcon,
  savings: SavingsRoundedIcon,
  trending: TrendingUpRoundedIcon,
  people: GroupsRoundedIcon,
};

export function StatsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedStat = selectedIndex !== null ? stats[selectedIndex] : null;
  const SelectedIcon = selectedStat ? iconMap[selectedStat.icon as keyof typeof iconMap] : null;

  return (
    <section className="section section--bottom-only">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <button
                key={stat.label}
                type="button"
                className="stats-card surface-card"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="icon-badge icon-badge--sm stats-card__icon">
                  <Icon />
                </div>
                <Typography variant="h4" className="stats-card__value">
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" className="stats-card__label">
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog
        open={selectedStat !== null}
        onClose={() => setSelectedIndex(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{ backdrop: { sx: { backdropFilter: 'blur(6px)' } } }}
      >
        {selectedStat && SelectedIcon && (
          <>
            <DialogTitle className="stats-dialog__title">
              <div className="icon-badge icon-badge--sm">
                <SelectedIcon />
              </div>
              <div className="stats-dialog__heading">
                <Typography variant="h6" className="stats-dialog__label">
                  {selectedStat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedStat.description}
                </Typography>
              </div>
            </DialogTitle>
            <DialogContent dividers className="stats-dialog__content">
              <div className="stats-dialog__figure">
                <Typography variant="h3" className="stats-dialog__value">
                  {selectedStat.value}
                </Typography>
                <span className="stats-dialog__figure-rule" />
              </div>
              {selectedStat.details.map((paragraph, index) => (
                <Typography
                  key={paragraph}
                  variant="body1"
                  className={`stats-dialog__paragraph ${
                    index === 0 ? 'stats-dialog__paragraph--lead' : ''
                  }`}
                >
                  {paragraph}
                </Typography>
              ))}
            </DialogContent>
            <DialogActions className="stats-dialog__actions">
              <Button onClick={() => setSelectedIndex(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
}
