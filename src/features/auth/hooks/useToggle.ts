import { useState, useCallback } from 'react';

export const useToggle = (initial: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState((currentValue) => !currentValue), []);
  return [state, toggle];
};
