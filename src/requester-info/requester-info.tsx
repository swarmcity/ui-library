// NEED TO DETERMINE WHERE IMAGE COMES FROM

import { h } from 'preact'
import cn from 'classnames'
import classes from './requester-info.module.css'
import girl from './girl.jpg'

export type RequesterInfoProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	requesterName?: string
	requesterRep?: number
	myRequest?: boolean
	detail?: boolean
}

export const RequesterInfo = ({
	class: className,
	...props
}: RequesterInfoProps) => (
	<div
		class={cn(
			classes.requesterInfo,
			props.detail && classes.detail,
			props.myRequest && classes.myRequest
		)}
	>
		<img src={girl} />
		<span>{props.requesterName}</span>
		<span class={cn(classes.dot, props.myRequest && classes.myDot)} />
		<span>{props.requesterRep} SWR</span>
	</div>
)
