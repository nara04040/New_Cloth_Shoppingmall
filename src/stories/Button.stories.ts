/** @format */

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio", options: ["filled", "outlined"] },
    },
    color: {
      control: { type: "radio", options: ["primary", "secondary", "red"] },
    },
    size: {
      control: { type: "radio", options: ["sm", "md", "lg"] },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "filled",
    color: "primary",
    size: "sm",
    children: null,
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    color: "secondary",
    size: "md",
    children: null,
  },
};

export const Red: Story = {
  args: {
    variant: "filled",
    color: "red",
    size: "lg",
    children: "구매하기",
  },
};

export const Order: Story = {
  args: {
    variant: "filled",
    color: "black",
    size: "lg",
    children: "주문하기",
  },
};

export const Outline: Story = {
  args: {
    variant: "outlined",
    color: "black",
    size: "md",
    children: "button",
    disabled: false,
  },
};

export const Outlinedisabled: Story = {
  args: {
    variant: "outlined",
    color: "gray",
    size: "md",
    children: "button",
    disabled: true,
  },
};
