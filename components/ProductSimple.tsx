import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 2,
  numReviews: 10,
};

export interface RatingProps {
  rating: number;
  numReviews: number;
}

export interface IProduct {
  id: number;
  name?: string;
  price?: number;
  isNew?: boolean;
  imageURL?: string;
  reviews?: RatingProps;
  description: string;
}

function Rating({ rating, numReviews }: RatingProps) {
  let rat = 0;
  let num = 0;
  rat = rating ? 10 : rating;
  num = numReviews && 10;
  return (
    <Box display="flex" alignItems="center" justifyContent={"flex-end"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rat * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rat ? "#FFD030" : "#FFD030"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}

      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {num} review{num > 1 && "s"}
      </Box>
    </Box>
  );
}

function CaptionCarousel(infos: IProduct) {
  return (
    <Flex justifyContent={"space-between"} gap={"20 px"} w="100">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        {infos.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={infos.imageURL}
          alt={`Picture of ${infos.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {infos.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"/details"} display={"flex"}>
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  {`R$ ${infos.price?.toFixed(2)}`}
                </Box>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>
          <Text mt={1} fontSize={"sm"}>
            {infos.description}
          </Text>
          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={2} numReviews={100} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default CaptionCarousel;
