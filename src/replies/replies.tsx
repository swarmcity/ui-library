import { h } from 'preact'
import cn from 'classnames'
import reply from './replies.module.css'
import { Reply } from '../reply/reply'
// import data from './data'

export type RepliesProps = h.JSX.HTMLAttributes<HTMLUListElement> & {
	hasReplies?: boolean
}

export const Replies = ({
	hasReplies,
	class: className,
	...props
}: RepliesProps) => {
	// const replies = data.map((reply) => {
	// 	return <Reply key={reply.id} {...reply} />
	// })
	const noReplies = (
		<div class="cardBody">
			<p style="text-align: center;">No replies yet</p>
		</div>
	)
	return (
		<ul class={cn(reply.replies, className)} {...props}>
			{/* {hasReplies ? noReplies : { replies }} */}
		</ul>
	)
}
