import cn from 'classnames'
import classes from './reply.module.css'
import defaultAvatar from './defaultAvatar.jpg'
import { HTMLAttributes } from 'react'

export type ReplyProps = HTMLAttributes<HTMLLIElement> & {
	replyTitle: string
	replyDate: Date
	replierName: string
	replierRep: number
	replyAmt: number
	myReply?: boolean
	avatar?: string
	detail?: boolean
}

export const Reply = ({ className, ...props }: ReplyProps) => (
	<li className={cn(classes.reply, className)} {...props}>
		<a className={cn(classes.reply, className)} href="">
			<div className={cn(props.detail && classes.detail)}>
				<div className={classes.titleRow}>
					<p className={classes.title}>{props.replyTitle}</p>
				</div>
				<div className={classes.date}>{props.replyDate.toLocaleString()}</div>
				<div className={classes.replierRow}>
					<div
						className={cn(
							classes.replierInfo,
							props.myReply && classes.myReply
						)}
					>
						<img src={props.avatar ?? defaultAvatar} />
						<div>
							<span>{props.replierName}</span>
							<span
								className={cn(classes.dot, props.myReply && classes.myDot)}
							/>
							<span>{props.replierRep} SWR</span>
						</div>
					</div>
					<div className={classes.replyAmt}>
						<div className={classes.dai}>DAI</div>
						<div className={classes.amt}>{props.replyAmt}</div>
					</div>
				</div>
			</div>
		</a>
	</li>
)
