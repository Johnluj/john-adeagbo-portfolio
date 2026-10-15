import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useApp } from '../../context/AppContext';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
  delay?: number;
  duration?: number;
  amount?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration,
  amount = 0.15
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { animationPreset } = useApp();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Adjust offsets based on intensity and preset
  const isKinetic = animationPreset === 'kinetic';
  const offsetDistance = isKinetic ? 36 : 20;
  const blurAmount = isKinetic ? '4px' : '0px';
  const customDuration = duration || (isKinetic ? 0.7 : 0.5);

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: offsetDistance, scale: 0.98, filter: `blur(${blurAmount})` };
      case 'down':
        return { opacity: 0, y: -offsetDistance, scale: 0.98, filter: `blur(${blurAmount})` };
      case 'left':
        return { opacity: 0, x: offsetDistance, scale: 0.98, filter: `blur(${blurAmount})` };
      case 'right':
        return { opacity: 0, x: -offsetDistance, scale: 0.98, filter: `blur(${blurAmount})` };
      case 'zoom':
        return { opacity: 0, scale: 0.94, filter: `blur(${blurAmount})` };
      default:
        return { opacity: 0, y: offsetDistance, scale: 0.98, filter: `blur(${blurAmount})` };
    }
  };

  const inView = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: customDuration,
      delay,
      ease: [0.22, 1, 0.36, 1] as const
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={inView}
      exit={getInitial()}
      viewport={{
        once: false, // Ensures element fades out when scrolling out of view, and fades in when scrolling back into view!
        amount: amount,
        margin: '-25px 0px -25px 0px'
      }}
      transition={{
        duration: customDuration,
        ease: [0.22, 1, 0.36, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.08 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.15, margin: '-20px 0px -20px 0px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.97, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
