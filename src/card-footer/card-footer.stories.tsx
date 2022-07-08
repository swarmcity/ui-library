import { h } from 'preact'
import { CardFooter } from './card-footer'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Card-Footer',
	component: CardFooter,
	argTypes: {},
} as Meta<typeof CardFooter>

const Template: Story<typeof CardFooter> = (args) => <CardFooter {...args} />

export const Default = Template.bind({})
