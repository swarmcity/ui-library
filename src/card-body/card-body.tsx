import { h } from 'preact'
import cn from 'classnames'
import classes from './card-body.module.css'
import girl from './images/girl.jpg'

export type CardBodyProps = h.JSX.HTMLAttributes<HTMLDivElement> & {}

export const CardBody = ({ class: className, ...props }: CardBodyProps) => (
	<div class={cn(classes.cardBody, className)} {...props}></div>
)
