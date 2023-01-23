import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.types';
import { Text } from 'components/atoms/Text';
import { ScienceTitle } from 'components/molecules/ScienceTitle';

export const Modal = ({ open, setOpenModal, content }: ModalProps) => {
  if (!open) return null;
  const { scienceTitle } = content[0];

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
          className="h-3/5 absolute w-60 bg-white flex item-center opacity-100 justify-center z-50 rounded-md">
          {content.map(({ name, longDescription }, i) => (
            <div key={i} className="overflow-y-scroll">
              <div className="flex item-center w-full relative">
                <Text size="base" color="primary" custom="font-bold p-4">
                  {name}
                </Text>
                <button
                  className="text-base absolute inset-y-1 inset-x-52 "
                  onClick={handleCloseModal}>
                  x
                </button>
              </div>
              {scienceTitle.map((title, i) => (
                <ScienceTitle key={i} scienceTitle={title} />
              ))}
              <Text size="xs" custom=" px-4">
                {longDescription}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.getElementById('portal') as Element
  );
};
