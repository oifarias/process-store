import Head from "next/head";
import CaptionCarousel from "@/components/CaptionCarousel";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ProductSimple, { IProduct } from "@/components/ProductSimple";
import { Title } from "@/components/Title";
import GridListWith from "@/components/GridListWith";
import Mock from "../public/mockProduct.json";
import { useState } from "react";

export default function Home() {

  const infos = Mock;
  const [idSelected, setIdSelected] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="ProcessStore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/psicon.ico" />
      </Head>
      <Box flex={"center"}>
        <CaptionCarousel />
      </Box>
      <Box marginTop={5} flex="center" justifyContent={"center"}>
        <Title title="Proces Store" size="3em" />
        <Text textAlign={"center"}>
          Tudo que você precisa para sua empresa!
        </Text>
        <Text textAlign={"center"}>
          Pesquise pelo seu problema que traremos a melhor solução
        </Text>
      </Box>
      <GridListWith />
      <Box p={4}>
        <Container maxW={"7xl"}>
          <Flex flexWrap="wrap" gridRowGap={10} justify="space-around">
            {infos.map((x: IProduct) => {
              return (
                <ProductSimple
                  name={x.name}
                  price={x.price}
                  isNew={x.isNew}
                  imageURL={x.imageURL}
                  id={x.id}
                  description={x.description}
                  key={x.id + 100}
                />
              );
            })}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
