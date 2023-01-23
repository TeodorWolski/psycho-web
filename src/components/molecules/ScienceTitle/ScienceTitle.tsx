import React from 'react';

interface ScienceTitleProps {
  scienceTitle: string;
}

export const ScienceTitle = ({ scienceTitle }: ScienceTitleProps) => {
  return <div>{scienceTitle}</div>;
};
