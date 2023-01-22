import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.types';

export const Modal = ({ open, setOpenModal, content }: ModalProps) => {
  if (!open) return null;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={handleCloseModal}
        className="fixed h-screen w-screen inset-0 z-40 flex overlay items-center justify-center">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-60 absolute w-20 bg-white flex item-center opacity-100 justify-center z-50 inset-1/2 translate-x-1/2 -translate-y-1/2">
          {content.map(({ name, longDescription }, i) => (
            <div key={i}>
              <h1>{name}</h1>
              <p>{longDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.getElementById('portal') as Element
  );
};
