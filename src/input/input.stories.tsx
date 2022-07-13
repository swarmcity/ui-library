import { h } from 'preact'
import { Input } from './input'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		id: {
			name: 'id',
			control: 'text',
			default: false,
		},
		children: {
			name: 'Label',
			control: 'text',
		},
	},
} as Meta<typeof Input>

const Template: Story<typeof Input> = (args) => <Input id="id" {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Label',
}
