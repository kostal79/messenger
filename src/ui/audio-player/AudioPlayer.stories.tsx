import type { Meta, StoryObj } from "@storybook/react";
import AudioPlayer from "./AudioPlayer";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import React from "react";

const meta: Meta<typeof AudioPlayer> = {
  title: "AudioPlayer/AudioPlayer",
  component: AudioPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioPlayerStory: Story = {
  args: {
    record: "",
    partnership_id: "",
    id: "",
  },
  render: function Render(args) {
    return (
      <Provider store={store}>
        <AudioPlayer {...args} />
      </Provider>
    );
  },
};
