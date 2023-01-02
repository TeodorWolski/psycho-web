import React from 'react';
import { TextProps } from './Text.types';

export const Text = ({ children, custom, size, color }: TextProps) => {
  const paragraphSizes = ['xs', 'sm', 'base'];
  const isParagraph = paragraphSizes.some(
    (paragraphSize) => paragraphSize === size
  );

  return isParagraph ? (
    <p className={`text-${size} ${custom} text-${color}`}>{children}</p>
  ) : (
    <h1 className={`text-${size} ${custom} text-${color}`}>{children}</h1>
  );
};
