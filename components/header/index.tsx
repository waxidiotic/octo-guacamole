import { Flex, Heading, Spacer, IconButton, useColorMode, HStack, Button, Text, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box paddingBottom={20}>
      <Flex align="center" paddingBottom={8}>
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
      <Heading as="h1" size="2xl">
        Alex Bussey
      </Heading>
      <Text fontSize="4xl">does not know what to put here.</Text>
    </Box>
  );
}
