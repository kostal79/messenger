import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import React from "react";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  render: function Render() {
    return (
      <Provider store={store}>
        <div style={{ width: "600px" }}>
          <Header />
        </div>
      </Provider>
    );
  },
};
