import { ChargesFormSearch } from "@/components/charges/presentation/ChargeFormSearch";
import { fireEvent, render } from "@testing-library/react";

describe("<ChargeFormSearch/>", () => {
  it("should fetches charges with search text", () => {
    const setSearchText = jest.fn();
    const fetchChargeWithSearch = jest.fn();

    const { getByRole } = render(
      <ChargesFormSearch
        searchText=""
        setSearchText={setSearchText}
        fetchChargeWithSearch={fetchChargeWithSearch}
      />
    );

    const textForInput = "Cobrança XYZ";

    fireEvent.change(getByRole("textbox"), {
      target: { value: textForInput },
    });
    expect(setSearchText).toHaveBeenCalledWith(textForInput);

    fireEvent.click(getByRole("button"));
    expect(fetchChargeWithSearch).toHaveBeenCalled();
  });
});
