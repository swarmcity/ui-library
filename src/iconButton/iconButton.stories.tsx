import { h } from 'preact'
import { IconButton } from './iconButton'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/IconButton',
	component: IconButton,
	argTypes: {
		variant: {
			name: 'Variant',
			control: 'select',
			options: [
				'addImage',
				'back',
				'cancel',
				'cancelCreation',
				'chat',
				'close',
				'collapse',
				'errorNext',
				'conflictNext',
				'confirmAction',
				'confirmDanger',
				'confirmSend',
				'counter',
				'exit',
				'reply',
				'requestNext',
				'requestStart',
				'rotateImg',
				'select',
				'upload',
			],
			defaultValue: 'close',
		},
		disabled: {
			name: 'Disable',
			control: 'boolean',
			defaultValue: false,
		},
		open: {
			name: 'Toggle (collapse only)',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof IconButton>

const Template: Story<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
