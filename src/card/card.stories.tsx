import { h } from 'preact'
import { Card } from './card'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		footer: {
			name: 'Card Footer?',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof Card>

const Template: Story<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
