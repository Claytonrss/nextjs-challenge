import { fetchCharge } from "@/components/charges/actions-creators";
import { useCharges } from "@/components/charges/hooks/useCharges";
import { createTestStore } from "@/components/charges/tests/createStore";
import { render } from "@testing-library/react";
import { useEffect } from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";

jest.mock("@/components/charges/actions-creators", () => ({
  fetchCharge: jest.fn(() => () => {}),
}));

describe("useCharges", () => {
  it("should dispatches fetchCharge on mount and with search text", async () => {
    const store = createTestStore();

    const TestComponent = () => {
      const { setSearchText, fetchChargeWithSearch } = useCharges();

      useEffect(() => {
        setSearchText("Test search text");
        fetchChargeWithSearch();
      }, [setSearchText, fetchChargeWithSearch]);

      return null;
    };

    await act(async () => {
      render(
        <Provider store={store}>
          <TestComponent />
        </Provider>
      );
    });

    expect(fetchCharge).toHaveBeenCalledWith("Test search text");
  });
});
