import { h } from 'preact'
import cn from 'classnames'
import classes from './reply.module.css'
import defaultAvatar from './defaultAvatar.jpg'

export type ReplyProps = h.JSX.HTMLAttributes<HTMLLIElement> & {
	replyTitle?: string
	replyDate?: string
	replierName?: string
	replierRep?: number
	replyAmt?: number
	myReply?: boolean
	avatar?: string
	detail?: boolean
}

export const Reply = ({ class: className, ...props }: ReplyProps) => (
	<li class={cn(classes.reply, className)} {...props}>
		<a class={cn(classes.reply, className)} href="">
			<div class={cn(props.detail && classes.detail)}>
				<div class={classes.titleRow}>
					<p class={classes.title}>{props.replyTitle}</p>
				</div>
				<div class={classes.date}>{props.replyDate}</div>
				<div class={classes.replierRow}>
					<div
						class={cn(classes.replierInfo, props.myReply && classes.myReply)}
					>
						<img src={props.avatar ?? defaultAvatar} />
						<div>
							<span>{props.replierName}</span>
							<span class={cn(classes.dot, props.myReply && classes.myDot)} />
							<span>{props.replierRep} SWR</span>
						</div>
					</div>
					<div class={classes.replyAmt}>
						<div class={classes.dai}>DAI</div>
						<div class={classes.amt}>{props.replyAmt}</div>
					</div>
				</div>
			</div>
		</a>
	</li>
)
