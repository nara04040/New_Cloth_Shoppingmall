import type { Meta, StoryObj } from "@storybook/react";
import CategoryBar from "./CategoryBar";

const meta = {
  title: "Example/CategoryBar",
  component: CategoryBar,
} satisfies Meta<typeof CategoryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: ["home", "category1", "category2", "category3", "category4", "category5", "category6"],
  },
};
