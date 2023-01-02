import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const Footer = () => {
  return (
    <footer className="bg-tertiary text-white p-3 mt-5 w-full flex flex-col align-center justify-center custom-sm:py-8">
      <Text size="lg" custom="font-bold text-center custom-sm:text-xl">
        Kontakt
      </Text>
      <div className="flex w-full items-center justify-around px-5 flex-col custom-xs:flex-row">
        {content.map(({ name, phone, email }) => (
          <section className="my-3 px-5 custom-sm:px-8" key={name}>
            <Text size="base" custom="font-medium py-1 custom-sm:text-lg">
              {name}
            </Text>
            <Text size="sm" custom="custom-sm:text-base">
              tel. kontaktowy: 📞 <strong>{phone}</strong>
            </Text>
            <Text size="sm" custom="custom-sm:text-base">
              e-mail: 📩 <strong>{email}</strong>
            </Text>
          </section>
        ))}
      </div>
    </footer>
  );
};
