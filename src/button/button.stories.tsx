import { h } from 'preact'
import { Button } from './button'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		bgColor: {
			control: "select",
			options: ["default", "light", "danger", "success", "primary"],
			default: "default",
		},
		color: {
			control: "select",
			options: ["default", "primary", "dark", "success", "danger", "light"],
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

export const DefaultSuccess = Template.bind({});
DefaultSuccess.args = {
	children: "Default Success Button",
	bgColor: "bgLight",
	color: "success",
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
	children: "Default Dark Button",
	bgColor: "bgLight",
	color: "dark",
};

export const DefaultDanger = Template.bind({});
DefaultDanger.args = {
	children: "Default Danger Button",
	bgColor: "bgLight",
	color: "danger",
};


export const Primary = Template.bind({});
Primary.args = {
	children: "Primary button",
	bgColor: "primary",
	color: "light",
};

export const Success = Template.bind({});
Success.args = {
	children: "Success button",
	bgColor: "success",
	color: "light",
};

export const Danger = Template.bind({});
Danger.args = {
	children: "Danger button",
	bgColor: "danger",
	color: "light",
};
