import { Title } from "@/components/Title";
import { useRouter } from "next/router";
import Mock from "../../../public/mockProduct.json";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { features } from "process";
import { Rating } from "@/components/ProductSimple";

export default function Simple() {
  const router = useRouter();

  console.log(router.query.id);
  const req = Mock.filter((x) => x.id === Number(router.query.id));
  const infos = req[0];
  console.log("infos", infos);

  return (
    infos && (
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack spacing={{ base: 2, md: 3 }}>
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={infos.imageURL === null ? "" : `../${infos.imageURL}`}
                fit={"cover"}
                align={"center"}
                w={"80%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Flex>
              <iframe
                width="800"
                height="400"
                src={infos.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Flex>
          </Stack>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"} marginRight={"auto"}>
              <Title size="3em" title={infos.name} />
              <Text
                color={"gray.900"}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {`R$ ${infos.price?.toFixed(2)}`}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {infos.description}
                </Text>
                <Text fontSize={"lg"}>{infos.description}</Text>
              </VStack>
              <Box>
                <Flex marginRight={"auto"} marginBottom={2}>
                  <Title size="1.7em" title="Features" />
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={3}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>
                    <ListItem>Tachymeter</ListItem>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={3}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                    <ListItem>Tachymeter</ListItem>
                    <ListItem>Tachymeter</ListItem>
                    <ListItem>Tachymeter</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Flex justifyContent="space-between" alignContent="center">
                  <Rating rating={2} numReviews={100} />
                </Flex>
              </Box>

              {/* <Box>
                <Flex marginRight={"auto"} marginBottom={2}>
                  <Title size="1.7em" title="Product Details" />
                </Flex>
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box> */}
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              borderRadius={8}
              bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Aderir
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    )
  );
}
