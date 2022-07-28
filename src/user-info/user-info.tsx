import { h } from 'preact'
import cn from 'classnames'
import classes from './user-info.module.css'
import defaultAvatar from './default-avatar.jpg'

export type UserInfoProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	name: string
	reputation: number
	myself?: boolean
	avatar?: string
	detail?: boolean
}

export const UserInfo = ({
	class: className,
	name,
	reputation,
	myself,
	avatar,
	detail,
	...props,
}: UserInfoProps) => (
	<div
		class={cn(
			classes.requesterInfo,
			detail && classes.detail,
			myself && classes.myRequest,
			className
		)}
		{...props}
	>
		<img src={avatar ?? defaultAvatar} />
		<span>{name}</span>
		<span class={cn(classes.dot, myself && classes.myDot)} />
		<span>{reputation} SWR</span>
	</div>
)
