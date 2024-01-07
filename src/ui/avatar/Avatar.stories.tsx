import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import React from 'react';

const meta: Meta<typeof Avatar> = {
title: 'Avatar/Avatar',
component: Avatar,
parameters: {
  layout: 'centered'
},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
  render: () => {
    const url = "https://vistapointe.net/images/ryan-gosling-6.jpg"
    return (
      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <Avatar />
        <Avatar url={url}/>
      </div>
    )
  }
};