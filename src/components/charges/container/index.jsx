import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useCharges } from "../hooks/useCharges";
import { ChargeCard } from "../presentation/ChargeCard";
import { ChargesFormSearch } from "../presentation/ChargeFormSearch";
import { ChargesError } from "../presentation/ChargesError";

export function ChargesContainer() {
  const {
    data: charges,
    loading,
    error,
    searchText,
    setSearchText,
    fetchChargeWithSearch,
  } = useCharges();

  if (loading) return <Spinner data-testid="spinner" size="xl" />;

  if (error) return <ChargesError error={error} />;

  return (
    <>
      <ChargesFormSearch
        searchText={searchText}
        setSearchText={setSearchText}
        fetchChargeWithSearch={fetchChargeWithSearch}
      />
      <SimpleGrid width={"100%"} minChildWidth="320px" spacing="24px">
        {charges &&
          charges.map((charge) => (
            <ChargeCard key={charge.debitCode} charge={charge} />
          ))}
      </SimpleGrid>
    </>
  );
}
