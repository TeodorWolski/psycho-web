export interface RefContextProps {
  children: React.ReactNode;
}

export interface RefContextType {
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}
