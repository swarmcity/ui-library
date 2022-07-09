import { h } from 'preact'
import cn from 'classnames'
import classes from './request-item.module.css'
import girl from '../assets/imgs/girl.jpg'

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
					class={
						props.myRequest
							? classes.requesterInfo + ' ' + classes.myRequest
							: classes.requesterInfo
					}
				>
					<img src={girl} />
					<div>
						<div>
							<span>{props.requesterName}</span>
							<span
								class={
									props.myRequest
										? classes.dot + ' ' + classes.myDot
										: classes.dot
								}
							></span>
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
