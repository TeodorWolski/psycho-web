import React from 'react';
import { Text } from 'components/atoms/Text';
import { Avatar } from 'components/atoms/Avatar';

export const AboutSection = () => {
  return (
    <section className="w-full flex items-center justify-center mt-5 flex-col">
      <Text size="md" custom="font-bold">
        Kim jesteśmy?
      </Text>
      <div>
        <Avatar
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F10%2F49068634038_31d19cd6a6_k-1.jpg%3Fx50647&f=1&nofb=1&ipt=512e33e4c232de9299ea33653f6496bd43aca3227894e404fa209985ba5f7c68&ipo=images"
          alt=""
        />
      </div>
    </section>
  );
};
