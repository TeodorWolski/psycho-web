import React from 'react';
import { Text } from 'components/atoms/Text';

export const ServicesSection = () => {
  return (
    <div className="bg-secondary h-72 w-full mt-1 custom-radius flex  items-center justify-center flex-col">
      <section className="p-3">
        <Text color="primary" size="lg" custom="font-bold">
          Profesjonalna pomoc 🛟
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </section>
      <section className="p-3">
        <Text size="lg" custom="font-bold" color="primary">
          Oczyszczenie umysłu 🧘‍♀️
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </section>
      <section className="p-3">
        <Text color="primary" size="lg" custom="font-bold">
          Wewnętrzny spokój 🍃
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </section>
    </div>
  );
};
