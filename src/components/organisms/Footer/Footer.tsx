import React, { useContext } from 'react';
import { Text } from 'components/atoms/Text';
import { content } from './content';
import { RefContext, RefContextType } from 'context';
import Link from 'next/link';

export const Footer = () => {
  const { contactRef } = useContext(RefContext) as RefContextType;

  return (
    <footer
      ref={contactRef}
      className="bg-tertiary text-white p-3 mt-5 w-full flex flex-col align-center justify-center custom-sm:py-8">
      <Text
        size="lg"
        custom="font-bold text-center custom-sm:text-xl custom-lg:text-2xl">
        Kontakt
      </Text>
      <Text
        size="base"
        custom="text-center custom-sm:text-lg custom-lg:text-xl py-2">
        🔔 W celu umówienia się na wizytę prosimy o SMS🔔
      </Text>
      <div className="flex w-full items-center justify-around flex-col custom-sm:flex-row custom-xs:px-5 custom-lg:justify-center">
        {content.map(({ name, phone, email, price }) => (
          <section
            className="my-3 w-full px-5 custom-sm:px-8 flex flex-col custom-lg:items-center custom-lg:justify-center custom-lg:custom-sm:w-1/2"
            key={name}>
            <Text
              size="base"
              custom="font-medium py-1 custom-sm:text-lg custom-lg:text-xl">
              {name}
            </Text>
            <Link
              className="text-xs custom-xs:text-sm custom-sm:text-base custom-lg:text-lg"
              href={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer">
              📞 tel. kontaktowy: <strong>{phone}</strong>
            </Link>
            <Link
              className="text-xs custom-xs:text-sm custom-sm:text-base custom-lg:text-lg"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer">
              📩 e-mail: <strong>{email}</strong>
            </Link>
            <Text
              size="xs"
              custom="custom-xs:text-sm custom-sm:text-base custom-lg:text-lg">
              💳 cena: <strong>{price}</strong>
            </Text>
          </section>
        ))}
      </div>
    </footer>
  );
};
