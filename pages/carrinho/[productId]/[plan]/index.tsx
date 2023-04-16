import {
  Box,
  Button,
  Container,
  Divider,
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
import ProductSimple, { IProduct } from "../../../../components/ProductSimple";
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

const ThreeTierPricingHorizontal = () => {
  const router = useRouter();
  console.log(router.query.productId);
  const id = Number(router.query.productId);
  const plan = router.query.plan;
  const req = Mock.filter((x) => x.id === id);
  const infos = req[0];
  console.log("infos", infos);
  const mocklist = Mock;
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
  console.log("valor", valor);

  return (
    <Box py={6} px={5} display={"flex"} flexDirection={"column"}>
      <Container maxW={"5xl"} mt={5}>
        <Flex direction={"row"} gap={2} mb={'10px'}>
          <Title size="3em" title="Carrinho de compras" />
        </Flex>
        {infos && (
          <ProductSimple
            name={infos.name}
            mensal={infos.mensal}
            isNew={infos.isNew}
            imageURL={`../../${infos.imageURL}`}
            id={infos.id}
            description={infos.description}
            key={infos.id + 100}
          />
        )}
        <Divider></Divider>
      </Container>
      <Box p={4}>
        <Container maxW={"7xl"}>
          <Flex mb="4">
            <Title size="2em" title="Recomendações"></Title>
          </Flex>

          <Flex flexWrap="wrap" gridRowGap={10} justify="space-around">
            {mocklist.map((x: IProduct) => {
              return (
                <ProductSimple
                  name={x.name}
                  mensal={x.mensal}
                  isNew={x.isNew}
                  imageURL={`../../${x.imageURL}`}
                  id={x.id}
                  description={x.description}
                  key={x.id + 100}
                />
              );
            })}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
