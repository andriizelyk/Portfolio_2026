import { Typography, IconButton } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { socialLinks } from '../../data/portfolio';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__layout">
          <Typography variant="body2" color="text.secondary">
            © {year} Andrii Zelyk. All rights reserved.
          </Typography>
          <div className="footer__meta">
            <Typography variant="body2" color="text.secondary" className="footer__credit">
              Built with React &amp; Material UI
              <FavoriteRoundedIcon className="footer__heart" />
            </Typography>
            <IconButton size="small" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
