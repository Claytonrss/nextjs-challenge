import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  HStack,
  Stack,
} from "@chakra-ui/react";

export function ChargesError({ error }) {
  return (
    <Alert status="error">
      <Stack>
        <HStack>
          <AlertIcon />
          <AlertTitle>Falha ao realizar requisição!</AlertTitle>
        </HStack>
        <AlertDescription>{error}</AlertDescription>
      </Stack>
    </Alert>
  );
}
