import React from 'react';
import { Text } from 'components/atoms/Text';
interface ScienceTitleSectionProps {
  scienceTitles: string[];
}

export const ScienceTitleSection = ({
  scienceTitles,
}: ScienceTitleSectionProps) => {
  return (
    <div className="max-w-xs flex  flex-wrap align-center justify-start pb-1">
      {scienceTitles.map((scienceTitle, i) => (
        <div
          key={i}
          className="bg-tertiary rounded-2xl flex items-center justify-center  m-1">
          <Text size="xs" color="white" custom="text-center font-bold p-1.5">
            {scienceTitle}
          </Text>
        </div>
      ))}
    </div>
  );
};
