import React from 'react';
import { Text } from 'components/atoms/Text';

export const ServicesSection = () => {
  return (
    <section className="bg-secondary h-72 w-full mt-1 custom-radius flex  items-center justify-center flex-col">
      <div className="p-3">
        <Text color="primary" size="md" custom="font-bold">
          Profesjonalna pomoc 🛟
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </div>
      <div className="p-3">
        <Text size="md" custom="font-bold" color="primary">
          Oczyszczenie umysłu 🧘‍♀️
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </div>
      <div className="p-3">
        <Text color="primary" size="md" custom="font-bold">
          Wewnętrzny spokój 🍃
        </Text>
        <Text size="sm">
          lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </Text>
      </div>
    </section>
  );
};
