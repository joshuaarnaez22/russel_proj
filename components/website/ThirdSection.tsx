import { Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { IWebsiteResource } from '@/services/types';
const ThirdSection = () => {
  const resources: IWebsiteResource[] = [
    {
      img: 'mapcursor.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
    {
      img: 'clock.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
    {
      img: 'phone.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
    {
      img: 'mapcursor.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
    {
      img: 'leaves.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
    {
      img: 'swap.png',
      title: 'City center office',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut ',
    },
  ];
  return (
    <>
      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        gap="20px"
        py="100px"
        scrollSnapAlign="start"
        scrollSnapStop="always"
      >
        {resources.map(({ img, title, description }, index) => {
          return (
            <Flex
              key={index}
              direction="column"
              w="400px"
              shadow="xl"
              pl="40px"
              py="30px"
              pr="30px"
              h="300px"
              gap="20px"
            >
              <Image src={img} alt="" w="50px" h="50px" />
              <Text>{title}</Text>
              <Text>{description}</Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default ThirdSection;
