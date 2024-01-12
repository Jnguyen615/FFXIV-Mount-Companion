import React, { useState, useEffect } from 'react';
import './ScrollFollowButton.scss';

const ScrollFollowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-follow-button ${isVisible ? 'visible' : 'hidden'}`} 
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default ScrollFollowButton;
