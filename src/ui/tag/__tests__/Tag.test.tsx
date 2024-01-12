import { describe, expect, test } from '@jest/globals';
import Tag from '../Tag';
import { ComponentProps } from '../../../types/types';
import { render, screen } from "@testing-library/react";


const testId = "tagtest";

const renderComponent = (props: ComponentProps = {}) => {
  return render(
      <Tag {...props} data-testid={testId} />
  );
};

describe ('Component Tag', () => {
  test('Do not throw error', () => {
    expect(renderComponent).not.toThrow();
  });
  test("Return div for default", () => {
    renderComponent();
    const component = screen.getByTestId(testId);
    expect(component.tagName).toBe("DIV")
  })
  test("Return BUTTON tagName", () => {
    renderComponent({as: "button"});
    const component = screen.getByTestId(testId);
    expect(component.tagName).toBe("BUTTON")
  })
});