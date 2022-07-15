// NEED TO FIX IMG FILE LOCATION AFTER FOLDER STRUCTURE IS SET

import { h } from 'preact'
import cn from 'classnames'
import classes from './request-item.module.css'
import girl from './girl.jpg'

export type RequestItemProps = h.JSX.HTMLAttributes<HTMLAnchorElement> & {
	requestTitle?: string
	requestReplies?: number
	requestDate?: string
	requesterName?: string
	requesterRep?: number
	requestAmt?: number
	myRequest?: boolean
	detail?: boolean
}
export const RequestItem = ({
	class: className,
	...props
}: RequestItemProps) => (
	<a class={cn(classes.request, className)} href="">
		<div class={props.detail ? classes.detail : ''}>
			<div class={classes.titleRow}>
				<p class={classes.title}>{props.requestTitle}</p>
				<div class={classes.replies}>
					<span>{props.requestReplies}</span>
				</div>
			</div>
			<div class={classes.date}>{props.requestDate}</div>
			<div class={classes.requesterRow}>
				<div
					class={cn(
						classes.requesterInfo,
						props.myRequest && classes.myRequest
					)}
				>
					<img src={girl} />
					<div>
						<div>
							<span>{props.requesterName}</span>
							<span class={cn(classes.dot, props.myRequest && classes.myDot)} />
							<span>{props.requesterRep} SWR</span>
						</div>
						{/* <div class="">No replies yet</div> */}
					</div>
				</div>
				<div class={classes.requestAmt}>
					<div class={classes.dai}>DAI</div>
					<div class={classes.amt}>{props.requestAmt}</div>
				</div>
			</div>
		</div>
	</a>
)
