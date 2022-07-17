import { h } from 'preact'
import cn from 'classnames'
import classes from './request-item.module.css'
import defaultAvatar from './defaultAvatar.jpg'
import { formatDate } from '../utils'

export type RequestItemProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	requestTitle: string
	requestReplies: number
	requestDate: Date
	requesterName: string
	requesterRep: number
	requestAmt: number
	myRequest?: boolean
	avatar?: string
	detail?: boolean
}
export const RequestItem = ({
	class: className,
	...props
}: RequestItemProps) => (
	<div class={cn(classes.request, className)}>
		<div class={props.detail ? classes.detail : ''}>
			<div class={classes.titleRow}>
				<p class={classes.title}>{props.requestTitle}</p>
				<div class={classes.replies}>
					<span>{props.requestReplies}</span>
				</div>
			</div>
			<div class={classes.date}>{formatDate(props.requestDate)}</div>
			<div class={classes.requesterRow}>
				<div
					class={cn(
						classes.requesterInfo,
						props.myRequest && classes.myRequest
					)}
				>
					<img src={props.avatar ?? defaultAvatar} />
					<div>
						<div>
							<span>{props.requesterName}</span>
							<span class={cn(classes.dot, props.myRequest && classes.myDot)} />
							<span>{props.requesterRep} SWR</span>
						</div>
					</div>
				</div>
				<div class={classes.requestAmt}>
					<div class={classes.dai}>DAI</div>
					<div class={classes.amt}>{props.requestAmt}</div>
				</div>
			</div>
		</div>
	</div>
)
