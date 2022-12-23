import React from 'react';
import { Avatar } from 'components/atoms/Avatar';
import { ClientInfo } from 'constant/ClientInfo';
import { Text } from 'components/atoms/Text';

export const HeroSection = () => {
  return (
    <div className="mx-3 my-5 h-72 h-full flex w-100 align-center justify-around">
      <section className="w-3/4 flex flex-col flex-end">
        <Text custom="p-2 font-medium" size="lg">
          Lorem ipsum dolor sit amet,{' '}
          <strong className="font-extrabold text-primary">
            {' '}
            consectetur adipiscing elit.
          </strong>
        </Text>
        <Text size="sm" custom="w-full p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          in nobis a soluta tenetur
        </Text>
        <button className="font-extrabold text-xs px-10 py-3 mt-3 mr-auto text-white bg-tertiary  shadow-black rounded-3xl">
          Click me
        </button>
      </section>
      <section className=" w-1/2 flex flex-col items-center  ">
        {ClientInfo.map(({ src, alt, isReversed }) => (
          <Avatar src={src} alt={alt} isReversed={isReversed} key={alt} />
        ))}
      </section>
    </div>
  );
};
