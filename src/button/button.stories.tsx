import { h } from "preact";
import { Button } from "./button";
import type { Meta, Story } from "@storybook/preact";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		bg: {
			control: "boolean",
			default: false,
		},
		variant: {
			control: "select",
			options: ["default", "action", "danger", "deal"],
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

const Template: Story<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
	children: "Default Button",
};
