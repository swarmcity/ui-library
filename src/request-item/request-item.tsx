import cn from 'classnames'
import { UserInfo, UserInfoProps } from '../user-info/user-info'
import classes from './request-item.module.css'
import { formatDate } from '../utils'
import { HTMLAttributes } from 'react'

export type RequestItemProps = HTMLAttributes<HTMLDivElement> & {
	title: string
	repliesCount: number
	date: Date
	amount: number
	detail?: boolean
	user: UserInfoProps
}
export const RequestItem = ({
	className,
	user,
	date,
	title,
	repliesCount,
	amount,
	detail,
}: RequestItemProps) => (
	<div className={cn(classes.request, detail && classes.detail, className)}>
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
