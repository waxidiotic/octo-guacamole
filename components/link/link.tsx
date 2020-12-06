import { chakra, useColorMode } from '@chakra-ui/react';

interface LinkProps {
  href: string;
  children: React.ReactChildren;
}

export default function Link(props: LinkProps) {
  const { colorMode } = useColorMode();
  const color = `highlight.${colorMode === 'dark' ? 'dark' : 'light'}`;

  return (
    <chakra.a
      href={props.href}
      pos="relative"
      overflow="hidden"
      textDecoration="none"
      fontWeight="semibold"
      color={color}
      _after={{
        content: '""',
        backgroundColor: color,
        opacity: 0.4,
        position: 'absolute',
        left: 0,
        bottom: '-4px',
        width: '100%',
        height: 'calc(100% - 12px)',
        transition: '0.35s cubic-bezier(0.25, 0.1, 0, 2.05)',
      }}
      _hover={{
        _after: {
          bottom: '-2px',
          width: '100%',
          height: '100%',
        },
      }}
    >
      {props.children}
    </chakra.a>
  );
}
