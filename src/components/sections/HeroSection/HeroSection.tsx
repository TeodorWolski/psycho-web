import React from 'react';
import { Avatar } from 'components/atoms/Avatar';
import { ClientInfo } from 'constant/ClientInfo';
import { Text } from 'components/atoms/Text';
import { useScroll } from 'hooks/useScroll';

export const HeroSection = () => {
  const { handleScroll } = useScroll();

  return (
    <section className="px-3 mt-2 mb-5 h-72 w-full flex flex-col justify-around items-center custom-xs:justify-center custom-xs:h-80 custom-xs:my-0 custom-sm:px-7 custom-sm:h-96 custom-lg:px-12">
      <div className="flex flex-col items-center">
        <div className="w-full h-full flex items-center justify-center custom-md:w-6/6 custom-md:px-2">
          <div className="w-3/4 flex flex-col flex-end custom-xs:justify-center h-full">
            <Text
              custom="p-2 font-medium custom-xs:text-xl custom-lg:text-2xl"
              size="lg">
              Ścieżka wygląda na trudną,{' '}
              <strong className="font-extrabold text-primary">
                {' '}
                - orzekła Wielka Panda
              </strong>
            </Text>
            <Text
              custom="w-full pl-2 custom-sm:text-base custom-lg:text-lg"
              size="sm">
              Nieważne, jak będzie ciężko - uspokoił ją Mały Smok.
              Najważniejsze, że będziemy szli razem ~{' '}
              <strong>James Norbury</strong>
            </Text>
          </div>
          <div className="w-1/2 flex flex-col items-center custom-xs:justify-center h-full">
            {ClientInfo.map(({ src, alt, reverse }) => (
              <Avatar src={src} alt={alt} reverse={reverse} key={alt} />
            ))}
          </div>
        </div>
        <button
          onClick={() => handleScroll('contact')}
          className="font-extrabold w-full text-sm px-10 py-3 mt-4 mr-auto text-white bg-tertiary shadow-black rounded-3xl  custom-xs:text-sm custom-sm:max-w-sm custom-sm:-translate-y-12 custom-md:-translate-y-16 custom-lg:text-base custom-md:-translate-y-16 custom-lg:-translate-y-12">
          Umów się na konsultacje
        </button>
      </div>
    </section>
  );
};
