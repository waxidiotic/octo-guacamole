import React from 'react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { IconButton, useClipboard, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function CodeSample({ children }: { children: string }) {
  const [code, setCode] = React.useState(children);
  const { hasCopied, onCopy } = useClipboard(String(code));

  React.useEffect(() => {
    setCode(children);
  }, []);

  return (
    <InputGroup my={8} isAttached>
      <Input value={children} variant="filled" isReadOnly isTruncated />
      <InputRightElement>
        <IconButton
          borderTopLeftRadius="0"
          borderBottomLeftRadius="0"
          onClick={onCopy}
          aria-label="Copy to clipboard"
          icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
