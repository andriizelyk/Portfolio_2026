import { Typography, Button } from '@mui/material';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { socialLinks } from '../../data/portfolio';
import './ContactSection.css';

export function ContactSection() {
  return (
    <section id="contact" className="section section--bottom-only">
      <div className="container">
        <div className="contact-panel surface-card">
          <div className="contact-panel__layout">
            <div className="contact-panel__info">
              <div className="icon-badge icon-badge--md">
                <MailRoundedIcon />
              </div>
              <div>
                <Typography variant="h6" className="contact-panel__title">
                  Let's build something great together
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I'm always open to discussing new opportunities and interesting projects.
                </Typography>
              </div>
            </div>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              href={socialLinks.contactForm}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-panel__button"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
