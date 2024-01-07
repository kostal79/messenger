import { describe, expect, test } from '@jest/globals';
import Arrow  from '../Arrow';
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { ArrowProps, colors, directions } from '../../../types/types';

const testId = "Arrow"

const renderComponent = (props: ArrowProps = {}) => {
  return render(<Arrow {...props} data-testid={testId} />);
};

describe ('Component Arrow', () => {
  test('Do not throw error', () => {
    expect(renderComponent).not.toThrow()
  });
  for (let direction of directions) {
    test(`Direction ${direction} is in className`, () => {
      renderComponent({direction})
      const component = screen.getByTestId(testId);
      expect(component.className).toContain(`direction--${direction}`)
    })
  };
  for (let color of colors) {
    test(`Direction ${color} is in className`, () => {
      renderComponent({color})
      const component = screen.getByTestId(testId);
      expect(component.className).toContain(`color--${color}`)
    })
  }
  test("Click work", () => {
    const clickHandler = jest.fn();
    renderComponent({ onClick: clickHandler });
    const component = screen.getByTestId(testId);
    fireEvent.click(component);
    expect(clickHandler).toBeCalledTimes(1);
  });
});