import type { Meta, Story } from '@storybook/react'
import { MarketplaceItem, MarketplaceItemProps } from './marketplace-item'

export default {
	title: 'Components/Marketplace Item',
	component: MarketplaceItem,
	argTypes: {
		title: {
			name: 'Title',
			type: { name: 'string', required: true },
			defaultValue: 'Settler',
		},
		completedDeals: {
			name: 'Completed Deals Count',
			type: { name: 'number', required: true },
			defaultValue: 761,
		},
	},
} as Meta<typeof MarketplaceItem>

const Template: Story<typeof MarketplaceItem> = (args) => (
	<MarketplaceItem {...(args as unknown as MarketplaceItemProps)} />
)

export const Default = Template.bind({})
