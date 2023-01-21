import React from 'react';

interface Image {
  src: string;
}

interface AvatarProps {
  src: Image;
  alt: string;
  reverse?: string;
}

export const Avatar = ({ src, alt, reverse }: AvatarProps) => {
  const reverseHelper = () => {
    switch (reverse) {
      case 'first':
        return 'z-10 -translate-x-5 translate-y-5';
      case 'second':
        return '-translate-y-1 translate-x-7';
      default:
        return '';
    }
  };

  return (
    <img
      src={src.src}
      className={`h-24 w-24 object-cover rounded-full border-solid border-4 border-tertiary ${reverseHelper()} custom-xs:h-28 custom-xs:w-28 custom-sm:h-32 custom-sm:w-32 custom-md:h-36 custom-md:w-36`}
      alt={alt}
    />
  );
};
