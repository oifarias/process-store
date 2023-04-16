import Head from "next/head";
import CaptionCarousel from "@/components/CaptionCarousel";
import { Box, Text } from "@chakra-ui/react";
import ProductSimple from "@/components/ProductSimple";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box flex={"center"}>
        <CaptionCarousel />
      </Box>
      <Box marginTop={10} flex="center" justifyContent={"center"}>
        <Title title="Proces Store" size="3em" />
        <Text textAlign={"center"}>Tudo que você precisa para sua empresa! </Text>
        <Text textAlign={"center"}>Pesquise pelo seu problema que traremos a melhor solução </Text>
      </Box>
      <Box marginTop={10} display="flex">
        <ProductSimple />
        <ProductSimple />
        <ProductSimple />
      </Box>
    </>
  );
}
