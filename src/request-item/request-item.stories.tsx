import { h } from 'preact'
import { RequestItem } from './request-item'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Request Item',
	component: RequestItem,
	argTypes: {
		requestTitle: {
			name: 'Request Title',
			type: { name: 'string', required: true },
			defaultValue: 'A meatball sub from Freds, NY',
		},
		requestReplies: {
			name: 'Replies Amount',
			type: { name: 'number', required: true },
			defaultValue: 4,
		},
		requestDate: {
			name: 'Request Date',
			type: { name: 'date', required: true },
			defaultValue: new Date(),
			default: new Date(),
		},
		requesterName: {
			name: 'Requester Name',
			type: { name: 'string', required: true },
			defaultValue: 'Sally Singer',
		},
		requesterRep: {
			name: 'Requester Reputation',
			type: { name: 'number', required: true },
			defaultValue: 52,
		},
		requestAmt: {
			name: 'Request Amount',
			type: { name: 'number', required: true },
			defaultValue: 12,
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
} as Meta<typeof RequestItem>

const Template: Story<typeof RequestItem> = (args) => <RequestItem {...args} />

export const Default = Template.bind({})
