import type { Meta, StoryObj } from '@storybook/react';
import AudioPlayer from './AudioPlayer';



const meta: Meta<typeof AudioPlayer> = {
title: 'AudioPlayer/AudioPlayer',
component: AudioPlayer,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const AudioPlayerStory: Story = {
  args: {
    track: 'https://dl2.mp3party.net/online/586606.mp3'
  }
};