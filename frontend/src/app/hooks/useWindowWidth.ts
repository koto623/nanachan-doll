import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'desktop';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setBreakpoint(window.innerWidth >= 768 ? 'desktop' : 'mobile');

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setBreakpoint(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { windowWidth, breakpoint };
};
