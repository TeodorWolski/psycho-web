import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const ServicesSection = () => {
  return (
    <section className="bg-secondary h-72 w-full mt-1 custom-radius flex items-center justify-center flex-col custom-xs:h-80 custom-sm:h-96 custom-md:flex-row custom-md:h-60 px-5">
      {content.map(({ title, description }) => (
        <div
          className="p-3 custom-xs:p-5 custom-sm:py-6 custom-sm:px-7 custom-md:px-2 custom-md:w-2/3  custom-md:justify-center custom-md:items-center custom-md:flex custom-md:flex-col custom-md:items-center"
          key={title}>
          <Text
            color="primary"
            size="base"
            custom="font-bold custom-sm:text-lg custom-md:py-2 custom-md:text-center">
            {title}
          </Text>
          <Text size="sm" custom="custom-sm:text-sm custom-md:text-center">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};
