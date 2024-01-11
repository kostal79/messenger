import type { Meta, StoryObj } from '@storybook/react';
import SortingButton from './SortingButton';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import React from 'react';

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
  },
  render: function Render(args) {
    return (
      <Provider store={store}>
        <SortingButton {...args}/>
      </Provider>
    )
  }
};