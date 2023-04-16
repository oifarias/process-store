import { useEffect, useState } from "react";
import { setTimeout } from "timers";

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
      <iframe
        width="560"
        height="315"
        src="https://testeeeeeeeeeeeesdadf.my.canva.site/"
        title="about us"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </>
  );
};

export default TypeGlasess;
