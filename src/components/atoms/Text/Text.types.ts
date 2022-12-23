type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Colors = 'primary' | 'secondary' | 'tertiary' | 'white | "black';

export type TextProps = {
  children: React.ReactNode;
  custom?: string;
  size: Size;
  color: Colors;
};
