// NOT NEEDED FOR EPISODE 1 SO I'M HOLDING OFF ON THIS ONE. NEEDS THE PROPS AND FINISH COMPONENT SETUP/STORY/CLASSES

import { h } from 'preact'
import cn from 'classnames'
import reply from './reply.module.css'
import girl from './girl.jpg'

export type ReplyProps = h.JSX.HTMLAttributes<HTMLLIElement> & {
	replyTitle?: string
	replyDate?: string
	replierName?: string
	replierRep?: number
	replyAmt?: number
	myReply?: boolean
	detail?: boolean
}

export const Reply = ({ class: className, ...props }: ReplyProps) => (
	<li class={cn(reply.reply, className)} {...props}>
		<a class={cn(reply.reply, className)} href="">
			<div class={props.detail ? reply.detail : ''}>
				<div class={reply.titleRow}>
					<p class={reply.title}>{props.replyTitle}</p>
				</div>
				<div class={reply.date}>{props.replyDate}</div>
				<div class={reply.replierRow}>
					<div
						class={
							props.myReply
								? reply.replierInfo + ' ' + reply.myReply
								: reply.replierInfo
						}
					>
						<img src={girl} />
						<div>
							<div>
								<span>{props.replierName}</span>
								<span
									class={
										props.myReply ? reply.dot + ' ' + reply.myDot : reply.dot
									}
								></span>
								<span>{props.replierRep} SWR</span>
							</div>
						</div>
					</div>
					<div class={reply.replyAmt}>
						<div class={reply.dai}>DAI</div>
						<div class={reply.amt}>{props.replyAmt}</div>
					</div>
				</div>
			</div>
		</a>
	</li>
)
