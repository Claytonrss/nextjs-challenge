import { formatToCurrency, getColorByStatus } from "@/components/charges/utils";

describe("utils", () => {
  it("should return correct color when getColorByStatus called with status", () => {
    expect(getColorByStatus("COMPLETED")).toEqual("green");
    expect(getColorByStatus("IN_PROGRESS")).toEqual("yellow");
    expect(getColorByStatus("ANY")).toEqual("red");
  });

  it("should return correct currency when formatToCurrency called with value", () => {
    expect(formatToCurrency(1200)).toContain("1.200,00");
  });
});
