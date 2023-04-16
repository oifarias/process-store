import { Flex, Heading } from "@chakra-ui/react";

export const Title = ({ title, size }: { title: string; size: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize={size}> {title}</Heading>
  </Flex>
);
