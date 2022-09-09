import { FullscreenLoading } from './fullscreen-loading'
import type { Meta, Story } from '@storybook/react'

export default {
	title: 'Components/FullscreenLoading',
	component: FullscreenLoading,
	argTypes: {
		children: {
			name: 'Children',
			control: 'text',
		},
	},
} as Meta<typeof FullscreenLoading>

const Template: Story<typeof FullscreenLoading> = (args) => (
	<FullscreenLoading {...args} />
)

export const Default = Template.bind({})
