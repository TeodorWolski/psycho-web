import React from 'react';
import { Text } from 'components/atoms/Text';
import { Avatar } from 'components/atoms/Avatar';

export const AboutSection = () => {
  return (
    <section className="w-full flex items-center justify-center mt-5 flex-col">
      <Text size="lg" custom="font-bold">
        Kim jesteśmy?
      </Text>
      <div className="p-2 flex flex-col items-center justify-center">
        <Avatar
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedogman.net%2Fwp-content%2Fuploads%2F2020%2F10%2F49068634038_31d19cd6a6_k-1.jpg%3Fx50647&f=1&nofb=1&ipt=512e33e4c232de9299ea33653f6496bd43aca3227894e404fa209985ba5f7c68&ipo=images"
          alt=""
        />
        <Text size="md" color="primary" custom="font-bold p-2">
          Tadeusz Norek
        </Text>
        <Text size="sm" custom="text-center font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nihil.
        </Text>
      </div>
      <div className="p-2 flex flex-col items-center justify-center">
        <Avatar
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.inspiremore.com%2Fwp-content%2Fuploads%2F2020%2F11%2F16113321%2FGrumpy-Dog-Challenge-24.jpg&f=1&nofb=1&ipt=b194af8a859c33a6761ad41b528f91f4949ba12cd95f2161fc5151ba572e96b1&ipo=images"
          alt=""
        />
        <Text size="md" color="primary" custom="font-bold p-2">
          Christian Kubota
        </Text>
        <Text size="sm" custom="text-center font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nihil.
        </Text>
      </div>
    </section>
  );
};
