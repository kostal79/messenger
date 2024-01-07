import type { Meta, StoryObj } from "@storybook/react";
import CallIcon from "./CallIcon";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CallIcon> = {
  title: "Icons/CallArrows",
  component: CallIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: () => (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <CallIcon type="incoming" /><span>входящие</span>
      <CallIcon type="outcoming"/><span>исходящие</span>
      <CallIcon type="missed"  /><span>пропущенные</span>
      <CallIcon type="non-call" /><span>недозвон</span>
    </div>
  ),
};