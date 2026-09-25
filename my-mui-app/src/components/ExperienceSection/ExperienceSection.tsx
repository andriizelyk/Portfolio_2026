import { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechChip } from '../TechChip/TechChip';
import { experience, type Company } from '../../data/portfolio';
import './ExperienceSection.css';

const VISIBLE_COUNT = 3;

function CompanyBadge({ company }: { company: Company }) {
  return (
    <div className="icon-badge icon-badge--lg icon-badge--square">
      {company.logoUrl ? <img src={company.logoUrl} alt={company.name} /> : company.name}
    </div>
  );
}

function CompanyLink({ company, className }: { company: Company; className?: string }) {
  if (!company.url) {
    return (
      <Typography variant="body2" className={className}>
        {company.name}
      </Typography>
    );
  }
  return (
    <Typography
      variant="body2"
      component="a"
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-reset ${className ?? ''}`}
    >
      {company.name}
    </Typography>
  );
}

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visibleExperience = expanded ? experience : experience.slice(0, VISIBLE_COUNT);
  const selectedExperience = selectedIndex !== null ? visibleExperience[selectedIndex] : null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h4" className="section-title">
            Experience
          </Typography>
        </div>

        <div>
          {visibleExperience.map((item, index) => {
            const isLast = index === visibleExperience.length - 1;
            return (
              <div key={item.company.name} className="timeline-item">
                <div className="timeline-item__rail">
                  <span className="timeline-item__dot" />
                  {!isLast && <span className="timeline-item__line" />}
                </div>

                <div className={`timeline-item__body ${isLast ? 'timeline-item__body--last' : ''}`}>
                  <Typography variant="caption" className="timeline-item__years">
                    {item.years}
                  </Typography>

                  <div className="timeline-item__card surface-card">
                    {/* Stretched overlay so the whole card opens the dialog while the
                        company link below stays independently clickable. */}
                    <button
                      type="button"
                      className="timeline-item__card-trigger"
                      onClick={() => setSelectedIndex(index)}
                      aria-label={`View details for ${item.role} at ${item.company.name}`}
                    />
                    <div className="timeline-item__card-layout">
                      <div className="timeline-item__main">
                        <CompanyBadge company={item.company} />
                        <div>
                          <Typography variant="subtitle1" className="timeline-item__role">
                            {item.role}
                          </Typography>
                          <CompanyLink company={item.company} className="timeline-item__company" />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="timeline-item__description"
                          >
                            {item.description}
                          </Typography>
                        </div>
                      </div>

                      <div className="tag-row timeline-item__tags">
                        {item.tags.map((tag) => (
                          <TechChip key={tag} tType={tag} tSize="small" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {experience.length > VISIBLE_COUNT && (
          <div className="experience-cta">
            <Button
              endIcon={<ArrowForwardRoundedIcon className={expanded ? 'experience-cta__icon--up' : ''} />}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Show less' : 'Learn more'}
            </Button>
          </div>
        )}
      </div>

      <Dialog
        open={selectedExperience !== null}
        onClose={() => setSelectedIndex(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{ backdrop: { sx: { backdropFilter: 'blur(6px)' } } }}
      >
        {selectedExperience && (
          <>
            <DialogTitle className="experience-dialog__title">
              <CompanyBadge company={selectedExperience.company} />
              <div>
                <Typography variant="h6" className="experience-dialog__role">
                  {selectedExperience.role}
                </Typography>
                <CompanyLink company={selectedExperience.company} className="experience-dialog__company" />
              </div>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="caption" className="experience-dialog__years">
                {selectedExperience.years}
              </Typography>
              <Typography variant="body1" className="experience-dialog__description">
                {selectedExperience.description}
              </Typography>
              {selectedExperience.highlights && (
                <ul className="experience-dialog__highlights">
                  {selectedExperience.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Typography variant="body1">{highlight}</Typography>
                    </li>
                  ))}
                </ul>
              )}
              <div className="tag-row experience-dialog__tags">
                {selectedExperience.tags.map((tag) => (
                  <TechChip key={tag} tType={tag} tSize="small" />
                ))}
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedIndex(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
}
