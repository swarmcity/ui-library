import { h } from 'preact'
import cn from 'classnames'
import { UserInfo, UserInfoProps } from '../user-info/user-info'
import classes from './request-item.module.css'
import { formatDate } from '../utils'

export type RequestItemProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	requestTitle: string
	requestReplies: number
	requestDate: Date
	requestAmt: number
	myself?: boolean
	avatar?: string
	detail?: boolean
	requesterDetail?: boolean
	user: UserInfoProps
}
export const RequestItem = ({
	class: className,
	user,
	...props
}: RequestItemProps) => (
	<div class={cn(classes.request, props.detail && classes.detail, className)}>
		<div class={classes.titleRow}>
			<p class={classes.title}>{props.requestTitle}</p>
			<div class={classes.replies}>
				<span>{props.requestReplies}</span>
			</div>
		</div>
		<div class={classes.date}>{formatDate(props.requestDate)}</div>
		<div class={classes.requesterRow}>
			<UserInfo {...user} />
			<div class={classes.requestAmt}>
				<div class={classes.dai}>DAI</div>
				<div class={classes.amt}>{props.requestAmt}</div>
			</div>
		</div>
	</div>
)
