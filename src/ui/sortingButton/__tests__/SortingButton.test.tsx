import { describe, expect, test } from "@jest/globals";
import SortingButton, { SortingButtonProps } from "../SortingButton";
import { render, screen } from "@testing-library/react";

const testId = "Sorting button";

const renderComponent = (props: SortingButtonProps = {}) => {
  return render(<SortingButton {...props} data-testid={testId} />);
};

describe("Component SortingButton", () => {
  test("Do not throw error", () => {
    expect(render).not.toThrow();
  });
  test("Label renders", () => {
    const label = "test-label";
    renderComponent({ label });
    const component = screen.getByTestId(testId);
    expect(component.textContent).toBe(label);
  });
});
