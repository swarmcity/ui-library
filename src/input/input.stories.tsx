import { Input } from './input'
import type { Meta, Story } from '@storybook/react'

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

export const Empty = Template.bind({})
Empty.args = {
	children: 'Label',
}

export const WithValue = Template.bind({})
WithValue.args = {
	children: 'Label',
	value: 'Some value',
}
