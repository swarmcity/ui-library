import cn from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import classes from './card.module.css'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
	footer?: ReactNode
	divider?: 'solid' | 'dashed'
}

export const Card = ({
	children,
	footer,
	divider,
	className,
	...props
}: CardProps) => (
	<div className={cn(classes.card, className)} {...props}>
		<div className={classes.cardBody}>{children}</div>

		{footer && (
			<div
				className={cn(
					classes.cardFooter,
					divider === 'solid' ? classes.dividerSolid : classes.dividerDashed
				)}
			>
				{footer}
			</div>
		)}
	</div>
)
