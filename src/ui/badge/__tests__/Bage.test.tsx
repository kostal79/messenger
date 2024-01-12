import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Badge from "../Badge";
import { BadgeProps, StatusType, defaultStatus, statuses } from "../../../types/types";

const testId: string = "Badge";

const renderComponent = (props: BadgeProps = {}) => {
  return render(<Badge {...props} data-testid={testId} />);
};
describe("Component Badge", () => {
  test("Do not throw error", () => {
    expect(renderComponent).not.toThrow();
  });
  test("Default status in className", () => {
    renderComponent();
    const component = screen.getByTestId(testId);
    expect(component.className).toContain(`status--${defaultStatus}`)
  });
  for (let status of statuses) {
    test(`Status ${status} in className`, () => {
      renderComponent({status});
      const component = screen.getByTestId(testId);
      expect(component.className).toContain(`status--${status}`)
    })
  }

  test("If status is good reders Хорошо", () => {
    const status: StatusType = "good";
    renderComponent({status});
    const component = screen.getByTestId(testId);
    expect(component.textContent).toBe("Хорошо")
  })
  test("If status is bad reders Плохо", () => {
    const status: StatusType = "bad";
    renderComponent({status});
    const component = screen.getByTestId(testId);
    expect(component.textContent).toBe("Плохо")
  })
  test("If status is excellent reders Отлично", () => {
    const status: StatusType = "excellent";
    renderComponent({status});
    const component = screen.getByTestId(testId);
    expect(component.textContent).toBe("Отлично")
  })
});