import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const ServicesSection = () => {
  return (
    <section className="bg-secondary h-80 w-full custom-radius flex items-center justify-center flex-col custom-sm:h-96 custom-md:flex-row custom-md:h-52">
      {content.map(({ title, description }) => (
        <div
          className="py-2 custom-xs:p-5 custom-sm:py-6 custom-sm:px-7 custom-md:px-4 custom-md:p-10 custom-md:h-full custom-md:w-1/3 custom-md:justify-center custom-md:items-center custom-md:flex custom-md:flex-col custom-md:items-center"
          key={title}>
          <Text
            color="primary"
            size="base"
            custom="font-semibold custom-sm:text-lg custom-md:py-0 custom-md:text-center w-100 custom-md:h-30 mb-2 custom-lg:text-xl">
            {title}
          </Text>
          <Text
            size="xs"
            custom="font-normal custom-sm:text-sm custom-md:text-center custom-lg:text-base h-full">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};
