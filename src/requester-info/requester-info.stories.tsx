import { h } from 'preact'
import { RequesterInfo } from './requester-info'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Requester Info',
	component: RequesterInfo,
	argTypes: {
		requesterName: {
			name: 'Requester Name',
			type: { name: 'string', required: true },
			defaultValue: 'Sally Singer',
			default: 'Sally Singer',
		},
		requesterRep: {
			name: 'Requester Reputation',
			type: { name: 'number', required: true },
			defaultValue: 52,
			default: 52,
		},
		myRequest: {
			name: 'My Request?',
			control: 'boolean',
			defaultValue: false,
		},
		detail: {
			name: 'Detail?',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof RequesterInfo>

const Template: Story<typeof RequesterInfo> = (args) => (
	<RequesterInfo {...args} />
)

export const Default = Template.bind({})
