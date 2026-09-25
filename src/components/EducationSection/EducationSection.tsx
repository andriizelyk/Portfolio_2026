import { Typography } from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { education, type School } from '../../data/portfolio';
import './EducationSection.css';

function SchoolLink({ school }: { school: School }) {
  if (!school.url) {
    return (
      <Typography variant="body2" className="timeline-item__company">
        {school.name}
      </Typography>
    );
  }
  return (
    <Typography
      variant="body2"
      component="a"
      href={school.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-reset timeline-item__company"
    >
      {school.name}
    </Typography>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h4" className="section-title">
            Education
          </Typography>
        </div>

        <div>
          {education.map((item, index) => {
            const isLast = index === education.length - 1;
            return (
              <div key={item.school.name} className="timeline-item">
                <div className="timeline-item__rail">
                  <span className="timeline-item__dot" />
                  {!isLast && <span className="timeline-item__line" />}
                </div>

                <div className={`timeline-item__body ${isLast ? 'timeline-item__body--last' : ''}`}>
                  <Typography variant="caption" className="timeline-item__years">
                    {item.years}
                  </Typography>

                  <div className="timeline-item__card surface-card">
                    <div className="timeline-item__card-layout">
                      <div className="timeline-item__main">
                        <div className="icon-badge icon-badge--lg education-item__badge">
                          <SchoolRoundedIcon />
                        </div>
                        <div>
                          <Typography variant="subtitle1" className="timeline-item__role">
                            {item.degree}
                          </Typography>
                          <SchoolLink school={item.school} />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="timeline-item__description"
                          >
                            {item.description}
                          </Typography>
                        </div>
                      </div>

                      <Typography variant="body2" color="text.secondary" className="education-item__location">
                        <PlaceRoundedIcon fontSize="inherit" />
                        {item.school.location}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
