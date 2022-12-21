import React from 'react';
import { Avatar } from 'components/atoms/Avatar';

const data = [
  {
    src: 'data:image/jpeg;base64,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',
    alt: 'pic_1',
    isReversed: true,
  },
  {
    src: 'data:image/jpeg;base64,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',
    alt: 'pic_2',
  },
];

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
        {data.map(({ src, alt, isReversed }) => (
          <Avatar src={src} alt={alt} isReversed={isReversed} key={alt} />
        ))}
      </section>
    </div>
  );
};
