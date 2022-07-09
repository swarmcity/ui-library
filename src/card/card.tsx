// DEPENDS ON ICONBUTTON COMPONENT, WAITING FOR MERGE

import { h } from 'preact'
import cn from 'classnames'
import card from './card.module.css'
import { CardBody } from '../card-body/card-body'
// import { IconButton } from '../icon-button'

export type CardProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	// hasFooter?: boolean
	detail?: boolean
}

export const Card = ({ class: className, ...props }: CardProps) => (
	<div class={cn(card.card, className)} {...props}>
		<CardBody requestItem={true} />
		{/* {props.detail && <IconButton variant='close' />} */}
	</div>
)
