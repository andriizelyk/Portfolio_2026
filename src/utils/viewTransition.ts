import { flushSync } from 'react-dom';

/**
 * Runs a state update inside a browser View Transition, so the resulting DOM
 * change animates instead of snapping. Elements carrying a `view-transition-name`
 * are matched between the before and after snapshots and tweened; everything
 * else cross-fades.
 *
 * `kind` is mirrored onto `<html data-view-transition>` for the life of the
 * transition, which is how the stylesheet tells one kind of change from another
 * — a list reflow wants different animations than a whole-page theme swap.
 *
 * Falls back to a plain update when the API is missing or the visitor asked for
 * reduced motion, which keeps this safe to call unconditionally.
 */
export function withViewTransition(update: () => void, kind?: string) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || typeof document.startViewTransition !== 'function') {
    update();
    return;
  }

  const root = document.documentElement;
  if (kind) root.dataset.viewTransition = kind;

  const transition = document.startViewTransition(() => {
    // The API snapshots the DOM as soon as this callback settles, so the update
    // has to land synchronously rather than on React's normal async schedule.
    flushSync(update);
  });

  // Clear on both settle paths: a transition that is skipped (a second click
  // mid-animation) rejects rather than resolves, and the attribute must not
  // outlive it either way.
  const clear = () => {
    if (root.dataset.viewTransition === kind) delete root.dataset.viewTransition;
  };
  transition.finished.then(clear, clear);
}
