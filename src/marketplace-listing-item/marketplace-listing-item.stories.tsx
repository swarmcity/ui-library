import type { Meta, Story } from '@storybook/react'
import {
	MarketplaceListingItem,
	MarketplaceListingItemProps,
} from './marketplace-listing-item'

export default {
	title: 'Components/Marketplace Listing Item',
	component: MarketplaceListingItem,
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
} as Meta<typeof MarketplaceListingItem>

const Template: Story<typeof MarketplaceListingItem> = (args) => (
	<MarketplaceListingItem
		{...(args as unknown as MarketplaceListingItemProps)}
	/>
)

export const Default = Template.bind({})
