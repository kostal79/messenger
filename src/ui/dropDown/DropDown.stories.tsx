import type { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';

const meta: Meta<typeof DropDown> = {
title: 'DropDown/DropDown',
component: DropDown,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const DropDownStory: Story = {
  args: {
    dropDownItems: ["Все типы", "Входящие", "Исходящие"]
  },
  render: function Render(args) {
    return (
      <Provider store={store}>
        <DropDown {...args} />
      </Provider>
    )
  }
};