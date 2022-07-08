import { h } from 'preact'
import { CardBody } from './card-body'
import type { Meta, Story } from '@storybook/preact'

export default {
	title: 'Components/Card-Body',
	component: CardBody,
	argTypes: {},
} as Meta<typeof CardBody>

const Template: Story<typeof CardBody> = (args) => <CardBody {...args} />

export const Default = Template.bind({})
