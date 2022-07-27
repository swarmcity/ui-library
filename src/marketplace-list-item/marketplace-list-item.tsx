import { h } from 'preact'
import cn from 'classnames'
import { UserInfo, UserInfoProps } from '../user-info/user-info'
import classes from './marketplace-list-item.module.css'
import { formatDate } from '../utils'

export type MarketplaceItemProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	title: string
	repliesCount: number
	date: Date
	amount: number
	user: UserInfoProps
}
export const MarketplaceItem = ({
	class: className,
	title,
	repliesCount,
	date,
	amount,
	user,
}: MarketplaceItemProps) => (
	<div class={cn(classes.request, className)}>
		<div class={classes.titleRow}>
			<p class={classes.title}>{title}</p>
			<div class={classes.replies}>
				<span>{repliesCount}</span>
			</div>
		</div>
		<div class={classes.date}>{formatDate(date)}</div>
		<div class={classes.requesterRow}>
			<UserInfo {...user} />
			<div class={classes.requestAmt}>
				<div class={classes.dai}>DAI</div>
				<div class={classes.amt}>{amount}</div>
			</div>
		</div>
	</div>
)
