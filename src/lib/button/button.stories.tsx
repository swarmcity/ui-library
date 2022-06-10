import { h } from "preact";
import { Button, ButtonProps } from "./button";
import type { Meta, Story } from "@storybook/preact";

export default {
  title: "Design System/MyButton",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button",
};
