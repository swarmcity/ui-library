// NOT NEEDED FOR EPISODE 1 SO I'M HOLDING OFF ON THIS ONE. NEEDS THE PROPS AND FINISH SETUP

import { h } from 'preact'
import cn from 'classnames'
import reply from './reply.module.css'

export type ReplyProps = h.JSX.HTMLAttributes<HTMLLIElement> & {}

export const Reply = ({ class: className, ...props }: ReplyProps) => (
	<li class={cn(reply.reply, className)} {...props}></li>
)
