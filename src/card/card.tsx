import { h } from 'preact'
import cn from 'classnames'
import classes from './card.module.css'

export type CardProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	footer?: h.JSX.Element
	divider?: 'solid' | 'dashed'
}

export const Card = ({
	children,
	footer,
	divider,
	class: className,
	...props
}: CardProps) => (
	<div class={cn(classes.card, className)} {...props}>
		<div class={classes.cardBody}>{children}</div>

		{footer && (
			<div
				class={cn(
					classes.cardFooter,
					divider === 'solid' ? classes.dividerSolid : classes.dividerDashed
				)}
			>
				{footer}
			</div>
		)}
	</div>
)
