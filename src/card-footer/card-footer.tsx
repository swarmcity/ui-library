import { h } from 'preact'
import cn from 'classnames'
import classes from './card-footer.module.css'

export type CardFooterProps = h.JSX.HTMLAttributes<HTMLDivElement> & {}

export const CardFooter = ({ class: className, ...props }: CardFooterProps) => (
	<div class={cn(classes.cardFooter, className)} {...props}></div>
)
