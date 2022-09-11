import cn from 'classnames'
import classes from './marketplace-item.module.css'
import { HTMLAttributes } from 'react'
import { IconButton } from '../icon-button/icon-button'

export type MarketplaceItemProps = Pick<
	HTMLAttributes<HTMLDivElement>,
	'className'
> & {
	title: string
	completedDeals: number
}
export const MarketplaceItem = ({
	className,
	title,
	completedDeals,
	...props
}: MarketplaceItemProps) => (
	<div className={cn(classes.root, className)} {...props}>
		<div className={classes.wrapper}>
			<div className={classes.wrapperTitle}>
				<h2 className={classes.title}>{title}</h2>
				<IconButton variant="select" />
			</div>
			<p className={classes.subtitle}>
				{completedDeals.toFixed()} deals completed
			</p>
		</div>
	</div>
)
