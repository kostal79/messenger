import type { Meta, StoryObj } from "@storybook/react";
import DateDropdown from "./DateDropdown";
import React from "react";

const meta: Meta<typeof DateDropdown> = {
  title: "DateDropdown/DateDropdown",
  component: DateDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DateDropdownStory: Story = {
  render: function () {
    return (
      <>
        <DateDropdown />
      </>
    );
  },
};
