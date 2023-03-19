import { useMediaQuery } from 'react-responsive';

export const useMediaRules = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return { isMobile, isDesktop };
};
