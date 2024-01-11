import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';

const meta: Meta<typeof Table> = {
title: 'Table/Table',
component: Table,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const TableStory: Story = {
  render: function Render() {
    
    return (
      <Provider store={store}>
        <Table />
      </Provider>
    )
  }
};