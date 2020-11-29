import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Container from '../components/container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
