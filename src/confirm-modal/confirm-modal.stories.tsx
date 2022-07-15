import { h } from 'preact'
import { ConfirmModal } from './confirm-modal'

// Types
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/ConfirmModal',
	component: ConfirmModal,
	argTypes: {
		bg: {
			name: 'Background',
			control: 'boolean',
			default: false,
		},
		variant: {
			name: 'Variant',
			control: 'select',
			options: ['default', 'action', 'danger'],
			default: 'default',
		},
		size: {
			name: 'Size',
			control: 'radio',
			options: ['default', 'large'],
			default: 'default',
		},
		disabled: {
			name: 'Disable',
			control: 'boolean',
			default: false,
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
	children: (
		<>
			<h1>Title</h1>
			<p>Text</p>
		</>
	),
	cancel: {},
	confirm: {},
}
