import {
  ChakraBaseProvider,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <>
        <ChakraBaseProvider key={"theme"} theme={theme}>
          <SideBar />
          <Component {...pageProps} />
          <Footer />
        </ChakraBaseProvider>
      </>
    </Container>
  );
}

export default MyApp;
