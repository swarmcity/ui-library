import { h } from 'preact'
import cn from 'classnames'
import classes from './requester-info.module.css'
import defaultAvatar from './default-avatar.jpg'

export type RequesterInfoProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	requesterName: string
	requesterRep: number
	myRequest?: boolean
	avatar?: string
	requesterDetail?: boolean
}

export const RequesterInfo = ({
	class: className,
	...props
}: RequesterInfoProps) => (
	<div
		class={cn(
			classes.requesterInfo,
			props.requesterDetail && classes.requesterDetail,
			props.myRequest && classes.myRequest,
			className
		)}
	>
		<img src={props.avatar ?? defaultAvatar} />
		<span>{props.requesterName}</span>
		<span class={cn(classes.dot, props.myRequest && classes.myDot)} />
		<span>{props.requesterRep} SWR</span>
	</div>
)
