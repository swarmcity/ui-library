import { h } from 'preact'
import { Card } from '../card/card'
import { CardBody } from '../card-body/card-body'
import cn from 'classnames'
import classes from './card-request.module.css'
import girl from '../assets/imgs/girl.jpg'

export type CardRequestProps = h.JSX.HTMLAttributes<HTMLAnchorElement> & {
	requestTitle?: string
	requestReplies?: number
	requestDate?: string
	requesterName?: string
	requesterRep?: number
	requestAmt?: number
	myRequest?: boolean
}
export const CardRequest = ({
	myRequest,
	class: className,
	...props
}: CardRequestProps) => (
	<Card>
		<a class={cn(classes.deal, className)} href="">
			<CardBody>
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
							myRequest
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
										myRequest ? classes.dot + ' ' + classes.myDot : classes.dot
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
			</CardBody>
		</a>
	</Card>
)
