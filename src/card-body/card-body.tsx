import { h } from 'preact'
import cn from 'classnames'
import classes from './card-body.module.css'

export type CardBodyProps = h.JSX.HTMLAttributes<HTMLDivElement> & {}

export const CardBody = ({ class: className, ...props }: CardBodyProps) => {
	return <div class={cn(classes.cardBody, className)} {...props}></div>
}
