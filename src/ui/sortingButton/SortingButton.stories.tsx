import type { Meta, StoryObj } from '@storybook/react';
import SortingButton from './SortingButton';

const meta: Meta<typeof SortingButton> = {
title: 'Button/SortingButton',
component: SortingButton,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const SortingButtonStory: Story = {
  args: {
    label: "Время"
  }
};