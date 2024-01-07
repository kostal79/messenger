import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

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
};