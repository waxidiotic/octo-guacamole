import type { AppProps } from 'next/app';
import { extendTheme, ChakraProvider, Theme, Container } from '@chakra-ui/react';
import Header from '../components/header';

const theme: Theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: {
    background: {
      dark: '#1d3557',
      light: '#f1faee',
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: `background.${props.colorMode}`,
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.800',
      },
      body: {
        borderTop: '16px #457b9d solid',
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Container paddingTop={4} maxWidth="lg">
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
