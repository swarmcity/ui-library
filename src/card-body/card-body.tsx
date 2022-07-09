// DEPENDS ON REPLIES COMPONENT, WAITING FOR MERGE
// UNCOMMENT COMMENTED LINES ONCE ICONBUTTON IS MERGED

import { h } from 'preact'
import cn from 'classnames'
import { RequestItem } from '../request-item/request-item'
// import { Replies } from './replies'
import classes from './card-body.module.css'

export type CardBodyProps = h.JSX.HTMLAttributes<HTMLDivElement> & {
	requestItem?: boolean
	hasReplies?: boolean
}

export const CardBody = ({
	requestItem,
	hasReplies,
	class: className,
	...props
}: CardBodyProps) => {
	return (
		<div class={cn(classes.cardBody, className)} {...props}>
			{requestItem && <RequestItem detail={false} />}
			{/* {hasReplies ? 'No replies yet' : <Replies />} */}
		</div>
	)
}
