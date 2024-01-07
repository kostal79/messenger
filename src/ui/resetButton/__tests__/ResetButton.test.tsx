import { describe, expect, test } from '@jest/globals';
import ResetButton, { ResetButtonProps } from '../ResetButton';
import { render, screen } from "@testing-library/react";


const testId = "Reset button";

const renderComponent = (props: ResetButtonProps = {}) => {
  return render(<ResetButton {...props} data-testid={testId} />);
};

describe ('Component ResetButton', () => {
  test('Do not throw error', () => {
    expect(renderComponent).not.toThrow();
  });
  test('Label is being rendered', () => {
    const label: string = "Some label";
    renderComponent({label})
    const component = screen.getByTestId(testId) as HTMLElement;
    expect(component.textContent).toBe(label)
  });
  test("Button is being rendered when visible", () => {
    const visible: boolean = true;
    renderComponent({visible})
    const component = screen.queryByTestId(testId);
    expect(component).not.toBeNull();
  })
  test("Button is not being rendered when visible is false", () => {
    const visible: boolean = false;
    renderComponent({visible})
    const component = screen.queryByTestId(testId);
    expect(component).toBeNull();
  })
});