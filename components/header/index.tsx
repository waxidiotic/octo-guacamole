import { Flex, Heading, Spacer, Link, IconButton, useColorMode, HStack, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Heading as="h2" size="2xl">
        Alex Bussey
      </Heading>
      <Spacer />
      <HStack spacing="4">
        <Button aria-label="test" variant="ghost">
          <NextLink href="/">Test</NextLink>
        </Button>
        <IconButton
          aria-label="toggle-dark-mode"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          variant="ghost"
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
}
