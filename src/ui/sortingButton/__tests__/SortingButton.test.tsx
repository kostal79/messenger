import { describe, expect, test } from "@jest/globals";
import SortingButton from "../SortingButton";
import { render, screen } from "@testing-library/react";
import { SortingButtonProps } from "../../../types/types";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const testId = "Sorting button";
const mockStore = configureMockStore();
const store = mockStore({
  data: {
    sortBy: "date",
  },
});

const renderComponent = (props: SortingButtonProps = { name: "sort" }) => {
  return render(
    <Provider store={store}>
      <SortingButton {...props} data-testid={testId} />
    </Provider>
  );
};

describe("Component SortingButton", () => {
  test("Do not throw error", () => {
    expect(render).not.toThrow();
  });
  test("Label renders", () => {
    const label = "test-label";
    renderComponent({ label, name: "sort" });
    const component = screen.getByTestId(testId);
    expect(component.textContent).toBe(label);
  });
});
