import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const scrollableRoot = document.scrollingElement ?? document.documentElement;

    scrollableRoot.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.scrollTop = 0;
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default ScrollToTop;
