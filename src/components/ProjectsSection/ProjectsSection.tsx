import { Typography, Button } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechChip } from '../TechChip/TechChip';
import { projects } from '../../data/portfolio';
import './ProjectsSection.css';

const iconMap = {
  lock: LockRoundedIcon,
  cloud: CloudRoundedIcon,
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h4" className="section-title">
            Featured Projects
          </Typography>
          <Button endIcon={<ArrowForwardRoundedIcon />}>View all projects</Button>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            const companyName = project.company.url ? (
              <a
                href={project.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-reset project-card__company"
              >
                {project.company.name}
              </a>
            ) : (
              <span className="project-card__company">{project.company.name}</span>
            );

            return (
              <div key={project.title} className="project-card surface-card">
                <div className="project-card__header">
                  <div className="icon-badge icon-badge--md">
                    <Icon />
                  </div>
                  <div>
                    <Typography variant="h6" className="project-card__title">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" component="div">
                      {companyName}
                    </Typography>
                  </div>
                </div>

                <Typography variant="body2" color="text.secondary" className="project-card__description">
                  {project.description}
                </Typography>

                <div className="tag-row project-card__tags">
                  {project.tags.map((tag) => (
                    <TechChip key={tag} tType={tag} tSize="small" />
                  ))}
                </div>

                <Button
                  size="small"
                  endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
                  className="project-card__cta"
                >
                  View project case study
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
