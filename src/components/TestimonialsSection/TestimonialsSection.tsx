import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Typography, Avatar, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { motion, useMotionValue, animate, type PanInfo } from 'framer-motion';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { testimonials, type Testimonial } from '../../data/portfolio';
import './TestimonialsSection.css';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

const GAP = 24;
const SWIPE_THRESHOLD = 50;
const SWIPE_VELOCITY_THRESHOLD = 300;

function TestimonialCard({ testimonial, active }: { testimonial: Testimonial; active: boolean }) {
  const { company } = testimonial;

  return (
    <div className={`testimonial-card surface-card${active ? ' testimonial-card--active' : ''}`}>
      <FormatQuoteRoundedIcon className="testimonial-card__quote-icon" />

      <Typography variant="body1" color="text.secondary" className="testimonial-card__quote">
        {testimonial.quote}
      </Typography>

      <div className={`testimonial-card__person${testimonial.profileUrl ? ' testimonial-card__person--linked' : ''}`}>
        <a
          className="link-reset"
          href={testimonial.profileUrl}
          target={testimonial.profileUrl ? '_blank' : undefined}
          rel={testimonial.profileUrl ? 'noopener noreferrer' : undefined}
        >
          <Avatar src={testimonial.avatarUrl} alt={testimonial.name} className="testimonial-card__avatar">
            {initials(testimonial.name)}
          </Avatar>
        </a>
        <div>
          <Typography
            variant="subtitle2"
            component="a"
            className="link-reset testimonial-card__name"
            href={testimonial.profileUrl}
            target={testimonial.profileUrl ? '_blank' : undefined}
            rel={testimonial.profileUrl ? 'noopener noreferrer' : undefined}
          >
            {testimonial.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {testimonial.role} · Worked together at{' '}
            {company.url ? (
              <a href={company.url} target="_blank" rel="noopener noreferrer" className="link-reset">
                {company.name}
              </a>
            ) : (
              company.name
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [index, setIndex] = useState(0);

  const count = testimonials.length;
  const itemsPerView = isDesktop ? Math.min(2, count) : 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const isAnimatingRef = useRef(false);

  useLayoutEffect(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => setContainerWidth(entries[0].contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideWidth = Math.max(0, (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView);
  const step = slideWidth + GAP;
  const baseX = -step;

  const x = useMotionValue(baseX);

  // Reset to the resting position whenever the measured size (or column count) changes.
  useLayoutEffect(() => {
    if (!isAnimatingRef.current) x.set(baseX);
  }, [baseX, x]);

  const slide = (dir: 1 | -1) => {
    if (isAnimatingRef.current || slideWidth === 0) return;
    isAnimatingRef.current = true;
    animate(x, baseX - dir * step, {
      type: 'spring',
      stiffness: 300,
      damping: 32,
      onComplete: () => {
        setIndex((i) => (i + dir + count) % count);
        x.set(baseX);
        isAnimatingRef.current = false;
      },
    });
  };

  const cancelDrag = () => {
    animate(x, baseX, { type: 'spring', stiffness: 300, damping: 30 });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY_THRESHOLD) slide(1);
    else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY_THRESHOLD) slide(-1);
    else cancelDrag();
  };

  const goTo = (target: number) => {
    if (target === index || isAnimatingRef.current) return;
    setIndex(target);
    x.set(baseX);
  };

  const prevPeek = testimonials[(index - 1 + count) % count];
  const currentWindow = Array.from({ length: itemsPerView }, (_, i) => testimonials[(index + i) % count]);
  const nextPeek = testimonials[(index + itemsPerView) % count];

  const slides = [
    { key: `prev-${prevPeek.name}`, testimonial: prevPeek, active: false },
    ...currentWindow.map((t) => ({ key: `current-${t.name}`, testimonial: t, active: true })),
    { key: `next-${nextPeek.name}`, testimonial: nextPeek, active: false },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <Typography variant="h4" className="section-title">
            Testimonials
          </Typography>
          <div className="testimonials-nav">
            <IconButton
              onClick={() => slide(-1)}
              size="small"
              aria-label="Previous testimonial"
              className="testimonials-nav-btn"
            >
              <ArrowBackIosNewRoundedIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => slide(1)}
              size="small"
              aria-label="Next testimonial"
              className="testimonials-nav-btn"
            >
              <ArrowForwardIosRoundedIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <div ref={containerRef} className="testimonials-viewport">
          <motion.div
            className="testimonials-track"
            drag={slideWidth > 0 ? 'x' : false}
            style={{ x }}
            dragConstraints={{ left: baseX - step, right: baseX + step }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            {slides.map(({ key, testimonial, active }) => (
              <div key={key} style={{ flex: `0 0 ${slideWidth}px`, width: slideWidth }}>
                <TestimonialCard testimonial={testimonial} active={active} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`testimonials-dot${i === index ? ' testimonials-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
