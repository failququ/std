import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type useHoverResult = [boolean, UseHoverBind];

export const useHover = (): useHoverResult => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return useMemo(
    () => [isHovered,
      { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }],
    [isHovered, handleMouseEnter, handleMouseLeave],
  );
};
