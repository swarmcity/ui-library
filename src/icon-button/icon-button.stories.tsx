import { h } from 'preact'
import { IconButton } from './icon-button'
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
		children: {
			name: 'Counter',
			control: 'number',
			defaultValue: 172,
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
