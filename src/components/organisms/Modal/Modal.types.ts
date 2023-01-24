import { Dispatch, SetStateAction } from 'react';

interface aboutTexts {
  title?: string;
  text: string;
}

export interface Content {
  name: string;
  // longDescription: string;
  aboutTexts: aboutTexts[];
  scienceTitles: string[];
}

export interface ModalProps {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  content: Content[];
}
