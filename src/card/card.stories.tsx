import { Card } from './card'
import type { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		children: {
			name: 'Body',
			control: 'text',
			defaultValue: "here's some stuff",
		},
		divider: {
			name: 'Divider',
			control: 'select',
			options: ['solid', 'dashed'],
		},
		footer: {
			name: 'Footer',
			control: 'text',
			defaultValue: 'No replies yet',
		},
	},
} as Meta<typeof Card>

const Template: Story<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
