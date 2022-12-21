import React from 'react';
import { Avatar } from 'components/atoms/Avatar';
import { ClientInfo } from 'constant/ClientInfo';

export const HeroSection = () => {
  return (
    <div className="mx-3 my-5 h-72 flex w-100 align-center justify-around">
      <section className="w-3/4 flex flex-col flex-end">
        <h1 className="text-lg p-2 font-medium">
          Lorem ipsum dolor sit amet,{' '}
          <strong className="font-extrabold text-primary">
            {' '}
            consectetur adipiscing elit.
          </strong>
        </h1>
        <p className="text-sm w-full p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          in nobis a soluta tenetur
        </p>
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
