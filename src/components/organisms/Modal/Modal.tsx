import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.types';
import { Text } from 'components/atoms/Text';
import { ScienceTitleSection } from 'components/molecules/ScienceTitleSection';

export const Modal = ({ open, setOpenModal, content }: ModalProps) => {
  if (!open) return null;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={handleCloseModal}
        className="fixed h-screen w-screen inset-0 z-40 flex overlay items-center justify-center ">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-3/5 absolute w-72 bg-white flex item-center opacity-100 justify-center z-50 rounded-md">
          {content.map(({ scienceTitles, name, aboutTexts }, i) => (
            <div key={i} className="overflow-y-scroll">
              <div className="flex item-center w-full relative justify">
                <Text size="base" color="primary" custom="font-bold px-4 pt-4">
                  {name}
                </Text>
                <button
                  className="text-base font-bold absolute inset-y-3.5 inset-x-64"
                  onClick={handleCloseModal}>
                  x
                </button>
              </div>
              <div className="flex justify-center flex-col px-4">
                <div className="border-b-2 border-tertiary w-5/8 flex items-center justify-between mt-1 mb-2">
                  <Text
                    size="sm"
                    color="black"
                    custom="font-semibold pt-1 pb-2 ">
                    O mnie
                  </Text>
                  <ScienceTitleSection scienceTitles={scienceTitles} />
                </div>
                {aboutTexts.map(({ text, title }) => (
                  <div key={i}>
                    <Text size="sm" custom="font-semibold">
                      {title}
                    </Text>
                    <Text size="sm" custom="pb-3">
                      {text}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.getElementById('portal') as Element
  );
};
