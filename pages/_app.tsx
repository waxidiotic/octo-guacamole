import type { AppProps } from 'next/app';
import Head from 'next/head';
import { extendTheme, ChakraProvider, Theme, Container, Heading, Text } from '@chakra-ui/react';
import { Components as MDXComponents, MDXProvider } from '@mdx-js/react';

import { Header } from '../components/header';
import { CodeSample } from '../components/code-sample';

const theme: Theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: {
    background: {
      dark: '#0B132B',
      // light: '#caf0f6',
      light: 'white',
    },
    highlight: {
      dark: '#DB504A',
      light: '#457b9d',
    },
  },
  fonts: {
    body: `'IBM Plex Sans', sans-serif`,
    heading: `'IBM Plex Sans Condensed', sans-serif`,
    mono: `'IBM Plex Mono', monospace`,
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: `background.${props.colorMode}`,
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
        fontFamily: 'body',
      },
      body: {
        borderTop: `16px ${props.colorMode === 'dark' ? '#DB504A' : '#457b9d'} solid`,
      },
      h2: {
        fontFamily: 'heading',
        fontStyle: 'italic',
      },
      'pre, code': {
        fontFamily: 'mono',
        fontWeight: 600,
        fontSize: '1em',
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
      },
    }),
  },
});

const mdComponents: MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" paddingBottom={8} {...props} />,
  h3: (props) => <Heading as="h3" size="md" paddingBottom={4} {...props} />,
  p: (props) => <Text lineHeight="taller" {...props} />,
  code: (props) => <CodeSample {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Bussey</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap"
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
