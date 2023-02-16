import React, { useState, useContext } from 'react';
import { Text } from 'components/atoms/Text';
import { Avatar } from 'components/atoms/Avatar';
import { Modal } from 'components/organisms/Modal';
import { RefContext, RefContextType } from 'context';
import { content } from './content';

export const AboutSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const currentClientContent = [content[currentContent]];
  const { aboutRef } = useContext(RefContext) as RefContextType;

  const handleOpenModal = (index: number) => {
    setCurrentContent(index);
    setOpenModal(true);
  };

  return (
    <section
      ref={aboutRef}
      className="w-full flex items-center justify-center mt-5 flex-col custom-sm:my-8">
      <Text size="lg" custom="font-bold text-lg custom-sm:text-xl">
        Kim jesteśmy?
      </Text>
      <div className="flex flex-col items-center justify-center custom-sm:flex-row">
        {content.map(({ name, shortDescription, src, alt }, index) => (
          <div
            className="flex p-2 custom-xs:p-5 items-center justify-center flex-col w-1/2"
            key={name}>
            <Avatar src={src} alt={alt} />
            <Text
              size="base"
              color="primary"
              custom="font-bold p-2 custom-sm:text-lg">
              {name}
            </Text>
            <Text size="sm" custom="text-center font-medium px-3">
              {shortDescription}
            </Text>
            <button
              onClick={() => handleOpenModal(index)}
              className="font-bold my-1 py-2 custom-sm:text-base text-primary">
              👉 Dowiedz się więcej 👈
            </button>
          </div>
        ))}
        <Modal
          open={openModal}
          setOpenModal={setOpenModal}
          content={currentClientContent}
        />
      </div>
    </section>
  );
};
