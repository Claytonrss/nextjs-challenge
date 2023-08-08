import { ChargesContainer } from "@/components/charges/container";
import { useCharges } from "@/components/charges/hooks/useCharges";
import { render } from "@testing-library/react";

jest.mock("@/components/charges/hooks/useCharges.js");

describe("<ChargeContainer/>", () => {
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
    useCharges.mockReset();
  });

  it("should render with loading state", () => {
    useCharges.mockReturnValue({ loading: true, data: [], error: null });
    const { getByTestId } = render(<ChargesContainer />);
    expect(getByTestId("spinner")).toBeInTheDocument();
  });

  it("should render with error state", () => {
    const errorMessage = "Fetching Error";
    useCharges.mockReturnValue({
      loading: false,
      data: [],
      error: errorMessage,
    });
    const { getByText } = render(<ChargesContainer />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("should render with data", () => {
    useCharges.mockReturnValue({
      loading: false,
      data: mockData,
      error: null,
    });
    const { getByText } = render(<ChargesContainer />);
    expect(getByText(mockData[0].debitCode)).toBeInTheDocument();
  });
});
