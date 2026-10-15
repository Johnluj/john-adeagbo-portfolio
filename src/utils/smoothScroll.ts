/**
 * High-performance fluid animated smooth scroll utility
 * Uses cubic-bezier easing for buttery-smooth movement between sections.
 */
export function smoothScrollTo(
  target: string | number | HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    callback?: () => void;
  }
) {
  const { offset = -80, duration = 750, callback } = options || {};

  let targetPosition = 0;

  if (typeof target === 'number') {
    targetPosition = target;
  } else if (typeof target === 'string') {
    const selector = target.startsWith('#') ? target : `#${target}`;
    const el = document.querySelector(selector) as HTMLElement | null;
    if (el) {
      const elRect = el.getBoundingClientRect();
      targetPosition = elRect.top + window.pageYOffset + offset;
    } else {
      return;
    }
  } else if (target instanceof HTMLElement) {
    const elRect = target.getBoundingClientRect();
    targetPosition = elRect.top + window.pageYOffset + offset;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Don't animate if already at the target
  if (Math.abs(distance) < 4) {
    if (callback) callback();
    return;
  }

  let startTime: number | null = null;

  // Ease-in-out quintic easing function for fluid cinematic glide
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animationStep(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animationStep);
    } else {
      window.scrollTo(0, targetPosition);
      if (callback) callback();
    }
  }

  window.requestAnimationFrame(animationStep);
}
