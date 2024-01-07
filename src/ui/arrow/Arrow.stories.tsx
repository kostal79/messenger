import type { Meta, StoryObj } from '@storybook/react';
import Arrow from './Arrow';
import React from 'react';

const meta: Meta<typeof Arrow> = {
title: 'Icons/Arrow',
component: Arrow,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const ArrowStory: Story = {
  render: () => {
    return (
      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <Arrow />
        <Arrow direction='up' />
        <Arrow direction='right' />
        <Arrow direction='left' />
        <Arrow direction='right' color='blue' />
        <Arrow direction='left' color='blue' />
      </div>
    )
  }
};