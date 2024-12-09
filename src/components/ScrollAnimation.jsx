import React from 'react';
import { useInView } from 'react-intersection-observer';

// Scroll Animation Wrapper Component
export const ScrollAnimation = ({ children, animationStyle = 'fade' }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Elements can re-enter/leave view multiple times
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const getAnimationClass = () => {
    switch (animationStyle) {
      case 'slide-left':
        return inView 
          ? 'translate-x-0 opacity-100 transition-all duration-1000' 
          : '-translate-x-20 opacity-0';
      case 'slide-right':
        return inView 
          ? 'translate-x-0 opacity-100 transition-all duration-1000' 
          : 'translate-x-20 opacity-0';
      case 'fade':
      default:
        return inView 
          ? 'opacity-100 transition-opacity duration-1000' 
          : 'opacity-0';
      case 'scale':
        return inView 
          ? 'scale-100 opacity-100 transition-all duration-1000' 
          : 'scale-90 opacity-0';
    }
  };

  return (
    <div 
      ref={ref}
      className={`transform ${getAnimationClass()} will-change-transform`}
    >
      {children}
    </div>
  );
};