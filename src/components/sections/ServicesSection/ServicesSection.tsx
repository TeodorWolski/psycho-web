import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const ServicesSection = () => {
  return (
    <section className="bg-secondary h-40 w-full custom-radius flex items-center justify-center flex-col custom-sm:flex-row custom-md:h-52 custom-lg:h-40">
      {content.map(({ title }) => (
        <div
          className="py-2  custom-md:p-10 custom-md:h-full custom-sm:px-2 custom-md:w-1/3 custom-md:justify-center custom-md:items-center custom-md:flex custom-md:flex-col custom-md:items-center custom-xl:max-w-xl"
          key={title}>
          <Text
            color="primary"
            size="base"
            custom="font-semibold custom-sm:text-lg custom-md:py-0 custom-md:text-center w-100 custom-md:h-30 mb-2 custom-lg:text-xl">
            {title}
          </Text>
        </div>
      ))}
    </section>
  );
};
