import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  reverse?: string;
}

export const Avatar = ({ src, alt, reverse }: AvatarProps) => {
  const reverseHelper = () => {
    switch (reverse) {
      case 'first':
        return 'z-10 -translate-x-5 translate-y-5';
      case 'second':
        return '-translate-y-5 translate-x-5';
      default:
        return '';
    }
  };

  return (
    <img
      src={src}
      className={`h-24 w-24 rounded-full border-solid border-4 border-tertiary ${reverseHelper()}`}
      alt={alt}
    />
  );
};
