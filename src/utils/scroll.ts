import { animate } from 'framer-motion';

const NAV_OFFSET = 88;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  animate(window.scrollY, Math.max(targetY, 0), {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (value) => window.scrollTo(0, value),
  });
}
