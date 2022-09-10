import cn from 'classnames'
import { UserInfo, UserInfoProps } from '../user-info/user-info'
import classes from './marketplace-listing-item.module.css'
import { formatDate } from '../utils'
import { HTMLAttributes } from 'react'

export type MarketplaceListingItemProps = Pick<
	HTMLAttributes<HTMLDivElement>,
	'className'
> & {
	title: string
	repliesCount: number
	date: Date
	amount: number
	user: UserInfoProps
}
export const MarketplaceListingItem = ({
	className,
	title,
	repliesCount,
	date,
	amount,
	user,
}: MarketplaceListingItemProps) => (
	<div className={cn(classes.request, className)}>
		<div className={classes.titleRow}>
			<p className={classes.title}>{title}</p>
			<div className={classes.replies}>
				<span>{repliesCount}</span>
			</div>
		</div>
		<div className={classes.date}>{formatDate(date)}</div>
		<div className={classes.requesterRow}>
			<UserInfo {...user} />
			<div className={classes.requestAmt}>
				<div className={classes.dai}>DAI</div>
				<div className={classes.amt}>{amount}</div>
			</div>
		</div>
	</div>
)
