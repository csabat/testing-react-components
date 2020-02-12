import { RefObject, useEffect } from 'react';

const useClickAway = (ref: RefObject<HTMLElement | null>, onClickAway: () => void) => {
  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref;

      if (el && !el.contains(event.target)) {
        onClickAway();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
};

export default useClickAway;
