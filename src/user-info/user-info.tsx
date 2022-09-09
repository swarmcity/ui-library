import cn from 'classnames'
import classes from './user-info.module.css'
import defaultAvatar from './default-avatar.jpg'
import { HTMLAttributes } from 'react'

export type UserInfoProps = HTMLAttributes<HTMLDivElement> & {
	name: string
	reputation: number
	myself?: boolean
	avatar?: string
	detail?: boolean
}

export const UserInfo = ({
	className,
	name,
	reputation,
	myself,
	avatar,
	detail,
	...props
}: UserInfoProps) => (
	<div
		className={cn(
			classes.requesterInfo,
			detail && classes.detail,
			myself && classes.myRequest,
			className
		)}
		{...props}
	>
		<img src={avatar ?? defaultAvatar} />
		<span>{name}</span>
		<span className={cn(classes.dot, myself && classes.myDot)} />
		<span>{reputation} SWR</span>
	</div>
)
