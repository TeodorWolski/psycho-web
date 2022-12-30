import React from 'react';
import { Text } from 'components/atoms/Text';
import { Avatar } from 'components/atoms/Avatar';
import { content } from './content';

export const AboutSection = () => {
  return (
    <section className="w-full flex items-center justify-center mt-5 flex-col">
      <Text size="lg" custom="font-bold text-lg">
        Kim jesteśmy?
      </Text>
      {content.map(({ name, description, src, alt }) => (
        <div
          className="p-2 flex flex-col items-center justify-center custom-xs:p-5"
          key={name}>
          <Avatar src={src} alt={alt} />
          <Text size="md" color="primary" custom="font-bold p-2">
            {name}
          </Text>
          <Text size="sm" custom="text-center font-medium">
            {description}
          </Text>
        </div>
      ))}
    </section>
  );
};
