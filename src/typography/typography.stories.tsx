import { COLORS, Typography, VARIANTS } from './typography'
import type { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/Typography',
	component: Typography,
	argTypes: {
		color: {
			name: 'Color',
			control: 'select',
			options: [undefined, ...Object.keys(COLORS)],
			default: undefined,
		},
		variant: {
			name: 'Variant',
			control: 'select',
			options: [undefined, ...Object.keys(VARIANTS)],
			default: undefined,
		},
		component: {
			name: 'Component',
			control: 'select',
			options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
			default: undefined,
		},
		children: {
			name: 'Text',
		},
	},
} as Meta<typeof Typography>

const Template: Story<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Some text',
}
