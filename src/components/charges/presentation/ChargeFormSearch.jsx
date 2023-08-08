import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

export function ChargesFormSearch({
  searchText,
  setSearchText,
  fetchChargeWithSearch,
}) {
  return (
    <FormControl>
      <FormLabel>Buscar cobranças</FormLabel>
      <HStack spacing={2}>
        <Input
          type="text"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
        />
        <Button onClick={fetchChargeWithSearch}>Buscar</Button>
      </HStack>
    </FormControl>
  );
}
