import React from 'react';
import { Text } from 'components/atoms/Text';
interface ScienceTitleProps {
  scienceTitles: string[];
}

export const ScienceTitle = ({ scienceTitles }: ScienceTitleProps) => {
  return (
    <div>
      {scienceTitles.map((scienceTitle, i) => (
        <div
          key={i}
          className="bg-primary rounded-2xl flex items-center justify-center">
          <Text size="sm" color="white" custom="text-center">
            {scienceTitle}
          </Text>
        </div>
      ))}
    </div>
  );
};
