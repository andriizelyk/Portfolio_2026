import { useState, type MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Drawer, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeControls } from '../ThemeControls/ThemeControls';
import { navLinks, socialLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scroll';
import './Navbar.css';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href.slice(1));
  };

  const navItems = (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          href={link.href}
          color="inherit"
          onClick={(event) => handleNavClick(event, link.href)}
        >
          {link.label}
        </Button>
      ))}
    </>
  );

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <div className="container">
        <Toolbar disableGutters className="navbar__toolbar">
          <Typography variant="h6" className="navbar__logo">
            A<span className="navbar__logo-accent">Z</span>
          </Typography>

          {!isMobile && <nav className="navbar__links">{navItems}</nav>}

          <div className="navbar__actions">
            {isMobile && <ThemeControls direction="row" />}

            {!isMobile && (
              <>
                <IconButton
                  size="small"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </>
            )}

            {isMobile && (
              <IconButton size="small" onClick={() => setDrawerOpen(true)}>
                <MenuIcon fontSize="small" />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </div>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="navbar__drawer">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              className="navbar__drawer-link"
              onClick={(event) => {
                handleNavClick(event, link.href);
                setDrawerOpen(false);
              }}
            >
              {link.label}
            </Button>
          ))}
          <div className="navbar__drawer-socials">
            <IconButton size="small" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
