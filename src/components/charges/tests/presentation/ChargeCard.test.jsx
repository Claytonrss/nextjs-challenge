import { ChargeCard } from "@/components/charges/presentation/ChargeCard";
import { render } from "@testing-library/react";

describe("<ChargeCard/>", () => {
  it("should be render charge with correct information", () => {
    const charge = {
      debitCode: "db65420f-f5b0-4a47-88a6-7f5064d02cb8",
      name: "Tacha Ferragista FR Nº 12 - 16mm",
      value: 1200,
      status: "IN_PROGRESS",
      createdAt: "2023-01-13T18:05:49",
    };

    const { getByText } = render(<ChargeCard charge={charge} />);

    expect(getByText(charge.debitCode)).toBeInTheDocument();
    expect(getByText(charge.name)).toBeInTheDocument();
  });
});
