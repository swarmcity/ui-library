import { h } from 'preact'
import type { Meta, Story } from '@storybook/preact'
import { MarketplaceItem, MarketplaceItemProps } from './marketplace-list-item'

export default {
	title: 'Components/Marketplace List Item',
	component: MarketplaceItem,
	argTypes: {
		title: {
			name: 'Title',
			type: { name: 'string', required: true },
			defaultValue: 'Translate my 1 page manifesto from ENG to NL?',
		},
		repliesCount: {
			name: 'Replies Amount',
			type: { name: 'number', required: true },
			defaultValue: 1,
		},
		date: {
			name: 'Date',
			type: { name: 'date', required: true },
			defaultValue: new Date(),
			default: new Date(),
		},
		amount: {
			name: 'Amount',
			type: { name: 'number', required: true },
			defaultValue: 33,
		},
		user: {
			control: 'object',
			defaultValue: {
				name: 'Frank',
				reputation: 1,
				myself: false,
			},
		},
	},
} as Meta<typeof MarketplaceItem>

const Template: Story<typeof MarketplaceItem> = (args) => (
	<MarketplaceItem {...(args as unknown as MarketplaceItemProps)} />
)

export const Default = Template.bind({})
