import { Typography, Chip, Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import heroImage from '/face.jpg';
import { hero, socialLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import './Hero.css';

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <Typography variant="overline" className="hero__greeting">
              {hero.greeting}
            </Typography>
            <Typography variant="h2" className="hero__name">
              {hero.firstName} <span className="hero__name-accent">{hero.lastName}</span>
            </Typography>
            <Typography variant="h5" color="text.secondary" className="hero__title">
              {hero.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" className="hero__tagline">
              {hero.tagline}
            </Typography>

            <div className="hero__badges">
              {hero.badges.map((badge) => (
                <Chip key={badge} label={badge} className="hero__badge" />
              ))}
            </div>

            <div className="hero__actions">
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                href="#experience"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('experience');
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="inherit"
                endIcon={<DownloadRoundedIcon />}
                href={socialLinks.resume}
                download
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="hero__portrait">
            <div className="hero__portrait-frame">
              <img src={heroImage} alt={`${hero.firstName} ${hero.lastName}`} />
            </div>

            <div className="hero__location-card">
              <div className="hero__location-row">
                <PlaceRoundedIcon fontSize="small" className="hero__location-icon" />
                <Typography variant="body2" className="hero__location-text">
                  {hero.location}
                </Typography>
              </div>
              <div className="hero__location-row">
                <span className="hero__status-dot-slot">
                  <span className="hero__status-dot" />
                </span>
                <Typography variant="caption" color="text.secondary">
                  {hero.availability}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
