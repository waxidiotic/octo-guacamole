import React from 'react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { ButtonGroup, Button, IconButton, useColorMode, useClipboard } from '@chakra-ui/react';

export default function CodeSample({ children }: { children: React.ReactChildren }) {
  const { colorMode } = useColorMode();
  const [code, setCode] = React.useState(children);
  const { hasCopied, onCopy } = useClipboard(String(code));

  React.useEffect(() => {
    setCode(children);
  }, []);

  return (
    <ButtonGroup colorScheme={colorMode === 'dark' ? 'gray' : 'blue'} isAttached variant="outline">
      <Button mr="-px">
        <code>{children}</code>
      </Button>
      <IconButton onClick={onCopy} aria-label="Copy to clipboard" icon={hasCopied ? <CheckIcon /> : <CopyIcon />} />
    </ButtonGroup>
  );
}
