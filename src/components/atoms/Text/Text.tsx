import React from 'react';
import { paragraphSizes } from './paragraphSizes';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextProps = {
  children: React.ReactNode;
  custom?: string;
  size: Size;
};

export const Text = ({ children, custom, size }: TextProps) => {
  const isParagraph = paragraphSizes.some(
    (paragraphSize) => paragraphSize === size
  );

  return isParagraph ? (
    <p className={`text-${size} ${custom}`}>{children}</p>
  ) : (
    <h1 className={`text-${size} ${custom}`}>{children}</h1>
  );
};
