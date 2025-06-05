import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

export const useDebouncedCallback = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const debounced = useMemo(() => debounce(callback, delay), [callback, delay]);

  useEffect(() => {
    return () => debounced.cancel();
  }, [debounced]);

  return debounced;
};
