import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.6,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    if (isInView) {
      const startValue = 0;
      const endValue = value;
      const durationMs = duration * 1000;

      // Ease-out cubic for smooth deceleration towards the target
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const updateCounter = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / durationMs, 1);
        const easedProgress = easeOutCubic(progress);
        const currentCount = startValue + (endValue - startValue) * easedProgress;

        setDisplayValue(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(endValue);
        }
      };

      animationFrameId = requestAnimationFrame(updateCounter);
    } else {
      // Reset back to zero when scrolled out of view so it recounts when scrolled back in
      setDisplayValue(0);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration]);

  const formattedNumber = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref} className={`tabular-nums font-mono ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
