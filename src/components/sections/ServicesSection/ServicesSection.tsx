import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const ServicesSection = () => {
  return (
    <section className="bg-secondary h-72 w-full mt-1 custom-radius flex  items-center justify-center flex-col custom-xs:h-80 custom-sm:h-96 ">
      {content.map(({ title, description }) => (
        <div
          className="p-3 custom-xs:p-5 custom-sm:py-6 custom-sm:px-7"
          key={title}>
          <Text color="primary" size="md" custom="font-bold custom-sm:text-lg">
            {title}
          </Text>
          <Text size="sm" custom="custom-sm:text-base">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};
