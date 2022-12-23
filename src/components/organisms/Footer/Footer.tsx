import React from 'react';
import { Text } from 'components/atoms/Text';
export const Footer = () => {
  return (
    <footer className="bg-tertiary text-white p-3 mt-5">
      <Text size="lg" custom="font-bold text-center">
        Kontakt
      </Text>
      <section className="mt-3">
        <Text size="md" custom="font-medium py-1">
          Tadeusz Norek
        </Text>
        <Text size="sm">
          tel. kontaktowy: 📞 <strong>123 456 789</strong>
        </Text>
        <Text size="sm">
          e-mail: 📩 <strong>mail@example.com</strong>
        </Text>
      </section>
      <section className="my-3">
        <Text size="md" custom="font-medium py-1">
          Christian Kubota
        </Text>
        <Text size="sm">
          tel. kontaktowy: 📞 <strong>789 654 321</strong>
        </Text>
        <Text size="sm">
          e-mail: 📩 <strong>liam@example.com</strong>
        </Text>
      </section>
    </footer>
  );
};
