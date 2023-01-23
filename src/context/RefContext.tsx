import { createContext, useRef } from 'react';
import { RefContextType, RefContextProps } from './RefContext.types';

export const RefContext = createContext<RefContextType | null>(null);

export const RefProvider = ({ children }: RefContextProps) => {
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const value = { contactRef, aboutRef };

  return <RefContext.Provider value={value}>{children}</RefContext.Provider>;
};
