import type { Meta, StoryObj } from "@storybook/react";
import ResetButton from "./ResetButton";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../../store/store";

const meta: Meta<typeof ResetButton> = {
  title: "Button/ResetButton",
  component: ResetButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {visible: true},
  render: function Render(args) {
    return (
      <Provider store={store}>
        <ResetButton {...args} />
      </Provider>
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: "Сбросить фильтры",
    visible: true,
  },
  render: function Render(args) {
    return (
      <Provider store={store}>
        <ResetButton {...args} />
      </Provider>
    );
  },
};
