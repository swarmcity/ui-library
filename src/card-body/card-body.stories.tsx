import { h } from 'preact'
import { CardBody } from './card-body'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Card-Body',
	component: CardBody,
	argTypes: {
		requestItem: {
			name: 'Request Item?',
			control: 'boolean',
			defaultValue: false,
		},
		requestItemDetail: {
			name: 'Detail?',
			control: 'boolean',
			defaultValue: false,
		},
		hasReplies: {
			name: 'Rreplies?',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof CardBody>

const Template: Story<typeof CardBody> = (args) => <CardBody {...args} />

export const Default = Template.bind({})
