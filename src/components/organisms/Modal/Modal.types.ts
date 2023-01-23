import { Dispatch, SetStateAction } from 'react';

export interface Content {
  name: string;
  longDescription: string;
  scienceTitles: string[];
}

export interface ModalProps {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  content: Content[];
}
