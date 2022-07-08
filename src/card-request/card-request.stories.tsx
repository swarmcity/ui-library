import { h } from 'preact'
import { CardRequest } from './card-request'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Card Request',
	component: CardRequest,
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
			type: { name: 'string', required: true },
			defaultValue: 'Yesterday, 18:21',
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
	},
} as Meta<typeof CardRequest>

const Template: Story<typeof CardRequest> = (args) => <CardRequest {...args} />

export const Default = Template.bind({})
