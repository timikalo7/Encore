"use client"

import { ReceivingOrganization } from '@prisma/client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
interface PopupContextType {
  marker: ReceivingOrganization | null;
  setMarker: (id: ReceivingOrganization) => void;
}

// Create the context with a default value
const PopupContext = createContext<PopupContextType | undefined>(undefined);

// Create a provider component
export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [marker, setMarker] = useState<ReceivingOrganization | null>(null);

  return (
    <PopupContext.Provider value={{ marker, setMarker }}>
      {children}
    </PopupContext.Provider>
  );
};

// Custom hook to use the PopupContext
export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
