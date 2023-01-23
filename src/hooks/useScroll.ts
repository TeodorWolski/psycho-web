import { useContext } from 'react';
import { RefContext, RefContextType } from 'context';

type ScrollType = 'contact' | 'about';

export const useScroll = () => {
  const { contactRef, aboutRef } = useContext(RefContext) as RefContextType;

  const handleScroll = (scroll: ScrollType) => {
    switch (scroll) {
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { handleScroll };
};
