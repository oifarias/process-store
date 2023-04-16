import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Text,
  VStack,
  Button,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { Title } from "./Title";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={"gray.500"}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const list = [
  {
    title: "Mensal",
    price: "299,00",
  },
  {
    title: "Trimestral",
    price: "850,00",
  },
  {
    title: "Semestral",
    price: "1500,00",
  },
  {
    title: "Anual",
    price: "1200,00",
  },
];

export interface ICard {
  idSelected?: any;
  id?: number;
  productId?: number;
  infos: any;
}

export default function ThreeTierPricing(props: ICard) {
  const listValues = [
    {
      title: "Mensal",
      price: props.infos?.mensal,
    },
    {
      title: "Trimestral",
      price: props.infos?.trimestral,
    },
    {
      title: "Semestral",
      price: props.infos?.semestral,
    },
    {
      title: "Anual",
      price: props.infos?.anual,
    },
  ]
  return (
    <Box py={1}>
      <VStack spacing={2} textAlign="center">
        <Title size="3em" title="Escolha o Plano que você precisa" />
        <Text fontSize="lg" color={"gray.500"}>
          Lembre-se que planos anuais, possuem mais desconto.
        </Text>
      </VStack>
      <Flex flexWrap="wrap" gap={2} justify="space-around">
        {list.map((x) => {
          return (
            <Stack
              direction={{ base: "column", md: "row" }}
              textAlign="center"
              justify="center"
              spacing={{ base: 4, lg: 10 }}
              py={10}
              borderColor={props.id === props.idSelected ? "blue.500" : ""}
            >
              <PriceWrapper>
                <Box py={4} px={5}>
                  <Text fontWeight="500" fontSize="2xl">
                    {x.title}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      R$
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      {x.price}
                    </Text>
                  </HStack>
                </Box>
                <VStack borderBottomRadius={"xl"}>
                  <Box w="80%" pb={5}>
                    <chakra.a
                      href={`/carrinho/${props.productId}/${x.title.toLowerCase()}`}
                      display={"flex"}
                    >
                      <Button
                        w="full"
                        colorScheme="black"
                        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
                      >
                        Adicionar
                      </Button>
                    </chakra.a>
                  </Box>
                </VStack>
              </PriceWrapper>
            </Stack>
          );
        })}
      </Flex>
    </Box>
  );
}
