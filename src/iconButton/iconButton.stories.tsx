import { h } from 'preact'
import { IconButton } from './iconButton'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/IconButton',
	component: IconButton,
	argTypes: {
		action: {
			control: 'select',
			options: ['close', 'cancelCreation', 'cancel', 'reply', 'rotateImg', 'exit', 'back', 'collapse', 'select', 'conflictNext', 'requestNext', 'errorNext', 'chat', 'requestStart', 'confirmAction', 'confirmDanger', 'confirmSend', 'upload'],
			default: 'close',
		},
		// variant: {
		// 	control: 'select',
		// 	options: ['default', 'action', 'danger', 'deal'],
		// 	default: 'default',
		// },
		// size: {
		// 	control: 'select',
		// 	options: ['xs', 'sm', 'md', 'lg', 'xl'],
		// 	default: 'md',
		// },
		// contained: {
		// 	control: 'boolean',
		// 	default: false,
		// },
		disabled: {
			control: 'boolean',
			default: false,
		},
		open: {
			control: 'boolean',
			default: false,
		},
	},
} as Meta<typeof IconButton>

const Template: Story<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
// Default.args = {
// 	children: '',
// }
