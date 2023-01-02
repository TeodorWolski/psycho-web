import React from 'react';
import { Text } from 'components/atoms/Text';
import { Avatar } from 'components/atoms/Avatar';
import { content } from './content';

export const AboutSection = () => {
  return (
    <section className="w-full flex items-center justify-center mt-5 flex-col">
      <Text size="lg" custom="font-bold text-lg custom-sm:text-xl">
        Kim jesteśmy?
      </Text>
      <div className="flex flex-col items-center justify-center custom-sm:flex-row">
        {content.map(({ name, description, src, alt }) => (
          <div
            className="flex p-2 custom-xs:p-5 items-center justify-center flex-col "
            key={name}>
            <Avatar src={src} alt={alt} />
            <Text
              size="base"
              color="primary"
              custom="font-bold p-2 custom-sm:text-lg">
              {name}
            </Text>
            <Text size="sm" custom="text-center font-medium">
              {description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
