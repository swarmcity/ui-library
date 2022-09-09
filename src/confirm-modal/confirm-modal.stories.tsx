import { ConfirmModal } from './confirm-modal'

// Types
import type { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/ConfirmModal',
	component: ConfirmModal,
	argTypes: {
		cancel: {
			name: 'Cancel button',
			control: 'object',
		},
		confirm: {
			name: 'Confirm button',
			control: 'object',
		},
		variant: {
			name: 'Variant',
			control: 'select',
			options: ['default', 'action', 'danger'],
			default: 'default',
		},
		children: {
			name: 'Header content',
		},
	},
} as Meta<typeof ConfirmModal>

const Template: Story<typeof ConfirmModal> = (args) => (
	<ConfirmModal children="Content" {...args} />
)

export const Default = Template.bind({})
Default.args = {
	children: 'Header',
	cancel: {},
	confirm: {},
}
