'use client';

import { useEffect } from 'react';

export const clearPersistedData = (persistKey: string) => localStorage.removeItem(persistKey);

export const getPersistedData = <T,>(defaultData: T, persistKey: string) => {
  try {
    const persistedData = localStorage.getItem(persistKey);
    return persistedData ? (JSON.parse(persistedData) as T) : defaultData;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    localStorage.removeItem(persistKey);
    return defaultData;
  }
};

export const usePersist = <T,>(data: T, persistKey: string) => {
  useEffect(() => {
    localStorage.setItem(persistKey, JSON.stringify(data));
  }, [data, persistKey]);
};
