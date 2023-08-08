import { chargesSelector } from "@/components/charges/selector";

describe("chargeSelector", () => {
  it("should return correct state when chargeSelector is called", () => {
    const mockData = {
      loading: false,
      error: null,
      data: [
        {
          debitCode: "db65420f-f5b0-4a47-88a6-7f5064d02cb8",
          name: "Tacha Ferragista FR Nº 12 - 16mm",
          value: 1200,
          status: "IN_PROGRESS",
          createdAt: "2023-01-13T18:05:49",
        },
      ],
    };
    const mockState = {
      charges: mockData,
    };

    const state = chargesSelector(mockState);
    expect(state).toEqual(mockData);
  });
});
