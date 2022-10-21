import { Button } from './button'
import type { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		bg: {
			name: 'Background',
			control: 'boolean',
			default: false,
		},
		color: {
			name: 'Color',
			control: 'select',
			options: [
				'default',
				'blue',
				'blue-light',
				'green',
				'green-light',
				'red',
				'yellow-light',
			],
			default: 'default',
		},
		size: {
			name: 'Size',
			control: 'radio',
			options: ['default', 'large'],
			default: 'default',
		},
		disabled: {
			name: 'Disable',
			control: 'boolean',
			default: false,
		},
		children: {
			name: 'Button Text',
		},
	},
} as Meta<typeof Button>

const Template: Story<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Default Button',
}
