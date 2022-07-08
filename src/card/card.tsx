import { h } from 'preact'
import cn from 'classnames'
import classes from './card.module.css'
import girl from './images/girl.jpg'

export type CardProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	footer?: boolean
}

export const Card = ({ class: className, ...props }: CardProps) => (
	<div class={cn(classes.card, className)} {...props}></div>
)
