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
			options: ['close', 'cancelCreation', 'cancel', 'reply', 'rotateImg', 'exit', 'back', 'collapse', 'select', 'conflictNext', 'requestNext', 'errorNext', 'chat', 'requestStart', 'confirmAction', 'confirmDanger', 'confirmSend', 'upload', 'counter', 'addImage'],
			default: 'close',
		},
		disabled: {
			name: 'Disable',
			control: 'boolean',
			default: false,
		},
		open: {
			name: 'Toggle Collapse',
			control: 'boolean',
			default: false,
		},
	},
} as Meta<typeof IconButton>

const Template: Story<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
