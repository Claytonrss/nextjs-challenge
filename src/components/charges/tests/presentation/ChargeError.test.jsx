import { ChargesError } from "@/components/charges/presentation/ChargesError";
import { render } from "@testing-library/react";

describe("<ChargeError/>", () => {
  it("should render an error message when ChargeError is rendered", () => {
    const errorMessage = "Fetching Error";
    const { getByText } = render(<ChargesError error={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
