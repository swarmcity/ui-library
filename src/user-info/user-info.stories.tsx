import { h } from 'preact'
import { UserInfo } from './user-info'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/User Info',
	component: UserInfo,
	argTypes: {
		name: {
			name: 'User Name',
			type: { name: 'string', required: true },
			defaultValue: 'Sally Singer',
			default: 'Sally Singer',
		},
		reputation: {
			name: 'User Reputation',
			type: { name: 'number', required: true },
			defaultValue: 52,
			default: 52,
		},
		myself: {
			name: 'Is this me?',
			control: 'boolean',
			defaultValue: false,
		},
		detail: {
			name: 'Detail?',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof UserInfo>

const Template: Story<typeof UserInfo> = (args) => (
	<UserInfo name="Sally Singer" reputation={52} {...args} />
)

export const Default = Template.bind({})
