import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Badge> = {
  title: "Badge/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ListStatus: Story = {
  render: () => (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <Badge status="bad" />
      <Badge status="good" />
      <Badge status="excellent" />
    </div>
  ),
};
