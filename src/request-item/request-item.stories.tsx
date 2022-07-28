import { h } from 'preact'
import type { Meta, Story } from '@storybook/preact'
import { RequestItem, RequestItemProps } from './request-item'

export default {
	title: 'Components/Request Item',
	component: RequestItem,
	argTypes: {
		title: {
			name: 'Request Title',
			type: { name: 'string', required: true },
			defaultValue: 'A meatball sub from Freds, NY',
		},
		repliesCount: {
			name: 'Replies Amount',
			type: { name: 'number', required: true },
			defaultValue: 4,
		},
		date: {
			name: 'Request Date',
			type: { name: 'date', required: true },
			defaultValue: new Date(),
			default: new Date(),
		},
		amount: {
			name: 'Request Amount',
			type: { name: 'number', required: true },
			defaultValue: 12,
		},
		detail: {
			name: 'Detail?',
			control: 'boolean',
			defaultValue: false,
		},
		user: {
			control: 'object',
			type: { name: 'object', required: true },
			defaultValue: {
				name: 'Frank',
				reputation: 1,
				myself: false,
			},
		},
	},
} as Meta<typeof RequestItem>

const Template: Story<typeof RequestItem> = (args) => (
	<RequestItem {...(args as unknown as RequestItemProps)} />
)

export const Default = Template.bind({})
