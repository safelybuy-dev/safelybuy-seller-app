import { useState, useEffect, useRef } from 'react';

export const useComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown);
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export const useOptimizedSearch = (state, delay = 500) => {
  const [text, setText] = useState(state);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setText(state);
    }, delay);

    return () => {
      clearTimeout(timeOut);
    };
  }, [delay, state]);

  return text;
};
