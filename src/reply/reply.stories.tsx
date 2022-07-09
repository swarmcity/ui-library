import { h } from 'preact'
import { Reply } from './reply'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Reply Item',
	component: Reply,
	argTypes: {
		replyTitle: {
			name: 'Reply Title',
			type: { name: 'string', required: true },
			defaultValue: 'Hi Sally, I can do it for you!',
		},
		replyDate: {
			name: 'Reply Date',
			type: { name: 'string', required: true },
			defaultValue: 'Today, 15:01',
		},
		replierName: {
			name: 'Replier Name',
			type: { name: 'string', required: true },
			defaultValue: 'Ellis',
		},
		replierRep: {
			name: 'Replier Reputation',
			type: { name: 'number', required: true },
			defaultValue: 52,
		},
		replyAmt: {
			name: 'Reply Amount',
			type: { name: 'number', required: true },
			defaultValue: 12,
		},
		myReply: {
			name: 'My Reply?',
			control: 'boolean',
			defaultValue: false,
		},
		detail: {
			name: 'Detail?',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof Reply>

const Template: Story<typeof Reply> = (args) => <Reply {...args} />

export const Default = Template.bind({})
