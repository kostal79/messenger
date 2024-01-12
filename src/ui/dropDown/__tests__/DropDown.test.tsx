import { describe, expect, test } from "@jest/globals";
import DropDown from "../DropDown";
import { DropDownProps } from "../../../types/types";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

const testId = "Dropdown test";
const dropDownItems = ["one", "two", "three"];

const mockStore = configureMockStore();

  const store = mockStore({
    data: {
      callType: "Все типы",
    },
  });

const renderComponent = (props: DropDownProps = { dropDownItems }) => {
  return render(
    <Provider store={store}>
      <DropDown {...props} data-testid={testId} />
    </Provider>
  );
};

describe("Component DropDown", () => {
  test("Do not throw error", () => {
    expect(renderComponent).not.toThrow();
  });
});
