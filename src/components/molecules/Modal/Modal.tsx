import React from 'react';
import { ModalProps } from './Modal.types';

export const Modal = ({ open, setOpenModal, content }: ModalProps) => {
  if (!open) return null;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      onClick={handleCloseModal}
      className="fixed h-screen w-screen inset-1/2 bg-black z-50 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="h-30 w-30 bg-white">
        {content.map(({ name, longDescription }) => (
          <div key={name}>
            <h1>{name}</h1>
            <p>{longDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
