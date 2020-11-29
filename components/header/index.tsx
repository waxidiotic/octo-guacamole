import { Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Header() {
  return (
    <Flex align="center">
      <Heading as="h2" size="2xl">
        Alex Bussey
      </Heading>
      <Spacer />
      <NextLink href="/">
        <Link>Test</Link>
      </NextLink>
    </Flex>
  );
}
