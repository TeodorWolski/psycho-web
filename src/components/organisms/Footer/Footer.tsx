import React from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';

export const Footer = () => {
  return (
    <footer className="bg-tertiary text-white p-3 mt-5 w-full flex flex-col align-center justify-center">
      <Text size="lg" custom="font-bold text-center">
        Kontakt
      </Text>
      <div className="flex w-full justify-center px-5 flex-col custom-xs:flex-row">
        {content.map(({ name, phone, email }) => (
          <section className="my-3 px-5" key={name}>
            <Text size="md" custom="font-medium py-1">
              {name}
            </Text>
            <Text size="sm">
              tel. kontaktowy: 📞 <strong>{phone}</strong>
            </Text>
            <Text size="sm">
              e-mail: 📩 <strong>{email}</strong>
            </Text>
          </section>
        ))}
      </div>
    </footer>
  );
};
