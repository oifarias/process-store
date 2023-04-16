import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Button onClick={toggleColorMode} marginRight={5} w={3} margin={1} >
      {isDark ? <SunIcon h={5} w={5} /> : <MoonIcon />}
    </Button>
  );
};
