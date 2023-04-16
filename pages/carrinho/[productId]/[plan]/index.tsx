import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import ProductSimple from "../../../../components/ProductSimple";
import { useRouter } from "next/router";
import Mock from "../../../../public/mockProduct.json";
import { Title } from "@/components/Title";
import { FiShoppingCart } from "react-icons/fi";

interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";
  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};



const ThreeTierPricingHorizontal = () => {
  const router = useRouter();
  console.log(router.query.productId);
  const id = Number(router.query.productId);
  const plan = router.query.plan;
  const req = Mock.filter((x) => x.id === id);
  const infos = req[0];
  console.log("infos", infos);

  const getPrice = (infos: any) => {
    if (plan === "mensal") {
      return infos.mensal;
    } else if (plan === "trimestral") {
      return infos.trimestral;
    } else if (plan === "semestral") {
      return infos.semestral;
    } else if (plan === "anual") {
      return infos.anual;
    }
  };

  const valor = getPrice(infos);
console.log("valor", valor)


  return (
    <Box py={6} px={5} display={"flex"} flexDirection={"column"}>
      <Container maxW={"5xl"} mt={10}>
        <Flex direction={"row"} gap={2}>
          <Title size="3em" title="Carrinho de compras" />
        </Flex>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 2, md: 2 }}
          py={{ base: 5, md: 5 }}
        >
          {infos && (
            <ProductSimple
              name={infos.name}
              price={infos.mensal}
              isNew={infos.isNew}
              imageURL={`../../${infos.imageURL}`}
              id={infos.id}
              description={infos.description}
              key={infos.id + 100}
            />
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
