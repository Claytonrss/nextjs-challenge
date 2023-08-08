import {
  fetchChargeError,
  fetchChargeStart,
  fetchChargeSuccess,
} from "@/components/charges/actions-creators";
import { chargesReducer } from "@/components/charges/reducer";

describe("chargeReducer", () => {
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  it("should return correct state with action START in chargeReducer", () => {
    const action = fetchChargeStart();
    const state = chargesReducer(initialState, action);
    const expectedState = { loading: true, data: null, error: null };
    expect(state).toEqual(expectedState);
  });

  it("should return correct state with action START in chargeReducer", () => {
    const action = fetchChargeStart();
    const state = chargesReducer(initialState, action);
    const expectedState = { loading: true, data: null, error: null };
    expect(state).toEqual(expectedState);
  });

  it("should return correct state with action SUCCESS in chargeReducer", () => {
    const mockData = [
      {
        debitCode: "db65420f-f5b0-4a47-88a6-7f5064d02cb8",
        name: "Tacha Ferragista FR Nº 12 - 16mm",
        value: 1200,
        status: "IN_PROGRESS",
        createdAt: "2023-01-13T18:05:49",
      },
    ];
    const action = fetchChargeSuccess(mockData);
    const state = chargesReducer(initialState, action);
    const expectedState = { loading: false, data: mockData, error: null };
    expect(state).toEqual(expectedState);
  });

  it("should return correct state with action ERROR in chargeReducer", () => {
    const errorMessage = "Fetch failed";
    const action = fetchChargeError(errorMessage);
    const state = chargesReducer(initialState, action);
    const expectedState = { loading: false, data: null, error: errorMessage };
    expect(state).toEqual(expectedState);
  });
});
