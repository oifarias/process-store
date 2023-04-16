import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import mockType from "../../public/mock.json";
import Card from "../../components/Card";

const TypeGlasess = () => {
  const [loading, setLoading] = useState(true);
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const hasType =
        localStorage.getItem("typeId") === "0"
          ? 999
          : localStorage.getItem("typeId");
      hasType !== null && setIdSelected(Number(hasType));
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (idSelected !== 0) {
      localStorage.setItem("typeId", `${idSelected}`);
    }
  }, [idSelected]);

  return (
    <>
        <SimpleGrid columns={[2, 2, 3]} gap={[4, 6, 6]} paddingTop={10}>
          {mockType.map((v, i) => {
            return (
              <Card
                content={v.description}
                description={v.description}
                title={v.typeName}
                //  img={v.icon}
                loading={loading}
                id={v.idType}
                idSelected={idSelected}
                setIdSelected={setIdSelected}
                key={`${v.idType}-${i}`}
              />
            );
          })}
        </SimpleGrid>
    </>
  );
};

export default TypeGlasess;
