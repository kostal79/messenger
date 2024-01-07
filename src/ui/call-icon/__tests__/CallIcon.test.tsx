import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import CallIcon, { CallIconProps, defaultType, types } from "../CallIcon";

const testId: string = "Call-icon";

const renderComponent = (props: CallIconProps = {}) => {
  return render(<CallIcon {...props} data-testid={testId} />);
};
describe("Component CallIcon", () => {
  test("Do not throw error", () => {
    expect(renderComponent).not.toThrow();
  });
  test("Default type in className", () => {
    renderComponent();
    const component = screen.getByTestId(testId);
    expect(component.className).toContain(`type--${defaultType}`)
  });
  for (let type of types) {
    test(`Type ${type} in className`, () => {
      renderComponent({type});
      const component = screen.getByTestId(testId);
      expect(component.className).toContain(`type--${type}`)
    })
  }
});
