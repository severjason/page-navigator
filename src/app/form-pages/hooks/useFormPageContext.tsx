'use client';

import React, { createContext, useContext } from 'react';

import { useFormPages } from './useFormPages';

const FormPagesContext = createContext<Nullable<ReturnType<typeof useFormPages>>>(null);

export const FormPagesProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useFormPages();
  return <FormPagesContext.Provider value={value}>{children}</FormPagesContext.Provider>;
};

export const useFormPageContext = () => {
  const context = useContext(FormPagesContext);

  if (!context) throw new Error('useFormPageContext should be used within FormPagesContext');

  return context;
};
