import type { AppProps } from 'next/app';
import Head from 'next/head';
import { extendTheme, ChakraProvider, Theme, Container, Heading } from '@chakra-ui/react';
import { Components as MDXComponents, MDXProvider } from '@mdx-js/react';

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
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Lato', sans-serif`,
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: `background.${props.colorMode}`,
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
        fontFamily: 'body',
      },
      body: {
        borderTop: '16px #457b9d solid',
      },
      h2: {
        fontStyle: 'italic',
      },
    }),
  },
});

const mdComponents: MDXComponents = { h1: (props) => <Heading as="h1" {...props} /> };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Bussey</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={extendTheme(theme)}>
        <Container paddingTop={4} maxWidth="lg">
          <Header />
          <MDXProvider components={mdComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
