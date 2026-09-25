import { Typography } from '@mui/material';
import { TechChip } from '../TechChip/TechChip';
import { techStack } from '../../data/portfolio';
import './TechStackSection.css';

export function TechStackSection() {
  return (
    <section id="skills" className="section section--bottom-only">
      <div className="container">
        <div className="tech-stack-panel surface-card">
          <Typography variant="subtitle1" className="tech-stack-panel__title">
            Technologies I work with
          </Typography>
          <div className="tag-row">
            {techStack.map((tech) => (
              <TechChip key={tech} tType={tech} tSize="normal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
