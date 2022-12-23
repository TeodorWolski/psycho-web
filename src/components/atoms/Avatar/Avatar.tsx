import React from 'react';

type Reverse = 'first' | 'second';

interface AvatarProps {
  src: string;
  alt: string;
  isReversed?: Reverse;
  custom?: 'string';
}

export const Avatar = ({ src, alt, isReversed }: AvatarProps) => {
  return (
    <img
      src={src}
      className={`h-24 w-24 rounded-full border-solid border-4 border-tertiary  ${
        isReversed === 'first'
          ? 'z-10 -translate-x-5 translate-y-5'
          : '-translate-y-5 translate-x-5'
      }`}
      alt={alt}
    />
  );
};
