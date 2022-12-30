import React from 'react';
import { Avatar } from 'components/atoms/Avatar';
import { ClientInfo } from 'constant/ClientInfo';
import { Text } from 'components/atoms/Text';

export const HeroSection = () => {
  return (
    <section className="mx-3 my-5 h-72 h-full flex w-100 align-center justify-around custom-xs:justify-center custom-xs:h-80 custom-xs:my-0">
      <div className="w-3/4 flex flex-col flex-end custom-xs:justify-center">
        <Text custom="p-2 font-medium custom-xs:text-xl" size="lg">
          Lorem ipsum dolor sit amet,{' '}
          <strong className="font-extrabold text-primary">
            {' '}
            consectetur adipiscing elit.
          </strong>
        </Text>
        <Text custom="w-full p-2" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          in nobis a soluta tenetur
        </Text>
        <button className="font-extrabold text-xs px-10 py-3 mt-3 mr-auto text-white bg-tertiary shadow-black rounded-3xl  custom-xs:text-sm">
          Click me
        </button>
      </div>
      <div className=" w-1/2 flex flex-col items-center  custom-xs:justify-center">
        {ClientInfo.map(({ src, alt, reverse }) => (
          <Avatar src={src} alt={alt} reverse={reverse} key={alt} />
        ))}
      </div>
    </section>
  );
};
