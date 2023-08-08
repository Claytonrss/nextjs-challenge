import { act } from "react-dom/test-utils";
import {
  fetchCharge,
  fetchChargeError,
  fetchChargeStart,
  fetchChargeSuccess,
} from "../../actions-creators";
import { CHARGES_ACTIONS } from "../../constants";
import { createTestStore } from "../createStore";

describe("actions-creator", () => {
  let store;
  const mockData = [
    {
      debitCode: "db65420f-f5b0-4a47-88a6-7f5064d02cb8",
      name: "Tacha Ferragista FR Nº 12 - 16mm",
      value: 1200,
      status: "IN_PROGRESS",
      createdAt: "2023-01-13T18:05:49",
    },
  ];

  beforeEach(() => {
    store = createTestStore();
  });

  it("should return correct action to called action-creator fetchChargeStart", async () => {
    const action = fetchChargeStart();
    expect(action).toEqual({ type: CHARGES_ACTIONS.FETCH_CHARGES_START });
  });

  it("should return correct action to called action-creator fetchChargeSuccess", async () => {
    const action = fetchChargeSuccess(mockData);
    expect(action).toEqual({
      type: CHARGES_ACTIONS.FETCH_CHARGES_SUCCESS,
      payload: mockData,
    });
  });

  it("should return correct action to called action-creator fetchChargeError", async () => {
    const mockMessage = "Error fetching";
    const action = fetchChargeError(mockMessage);
    expect(action).toEqual({
      type: CHARGES_ACTIONS.FETCH_CHARGES_ERROR,
      payload: mockMessage,
    });
  });

  it("should return correct state SUCCESS after called action-creator fetchCharge without params", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    await act(async () => store.dispatch(fetchCharge()));
    expect(store.getState().charges.data).toEqual(mockData);
  });

  it("should return correct state SUCCESS after called action-creator fetchCharge with params", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    await act(async () => store.dispatch(fetchCharge("TEST_COBRANCA")));
    expect(store.getState().charges.data).toEqual(mockData);
  });

  it("should return correct state ERROR after called action-creator fetchCharge", async () => {
    const errorMessage = "Fetch failed";
    global.fetch = jest.fn(() => Promise.reject({ message: errorMessage }));
    await act(async () => store.dispatch(fetchCharge()));
    expect(store.getState().charges.error).toEqual(errorMessage);
  });
});
