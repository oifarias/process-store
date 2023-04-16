import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Container maxW={'5xl'} mt={10}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Especialista'}
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Contrate um especialista para indicar e orientar as melhores ferramentas para seu negocio.'
            }
            href={'#'}
          />
          <Card
            heading={'Atendimento'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'Atendimento especializado pela nossa equipe, de forma humanizada para resolver qualquer problema.'
            }
            href={'#'}
          />
          <Card
            heading={'Pagamento'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Ganhe descontos nos planos anuais e contratando mais de um serviço.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
           <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}