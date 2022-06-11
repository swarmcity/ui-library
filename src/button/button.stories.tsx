import { h } from "preact";
import { Button } from "./button";
import type { Meta, Story } from "@storybook/preact";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: ["default", "red", "green", "black", "white"],
      default: "default",
    },
    size: {
      control: "radio",
      options: ["default", "large"],
      default: "default",
    },
    disabled: {
      control: "boolean",
      default: false,
    },
  },
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button",
};
