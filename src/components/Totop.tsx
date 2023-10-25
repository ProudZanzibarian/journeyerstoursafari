import React, { useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
