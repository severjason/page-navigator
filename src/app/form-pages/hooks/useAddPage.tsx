'use client';

import React, { createContext, useContext, useState } from 'react';

const useAddPage = () => {
  const [selectedId, setSelectedId] = useState<Nullable<string>>(null);

  const onClose = () => setSelectedId(null);
  const onOpen = (id: string) => setSelectedId(id);

  return {
    selectedId,
    isOpened: !!selectedId,
    onClose,
    onOpen,
  };
};

const AddPageContext = createContext<Nullable<ReturnType<typeof useAddPage>>>(null);

export const AddPageProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAddPage();
  return <AddPageContext.Provider value={value}>{children}</AddPageContext.Provider>;
};

export const useAddPageContext = () => {
  const context = useContext(AddPageContext);

  if (!context) throw new Error('useAddPageContext should be used within AddPageContext');

  return context;
};
