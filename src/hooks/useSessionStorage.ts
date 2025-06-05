import { useState, useEffect } from 'react';

export const useSessionStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`useSessionStorage error getting key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`useSessionStorage error setting key “${key}”:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};
