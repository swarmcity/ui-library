import { h } from 'preact'
import cn from 'classnames'
import classes from './iconButton.module.css'

const ACTIONS = {
	cancelCreation: classes.cancelCreation,
	close: classes.close,
	cancel: classes.cancel,
	reply: classes.reply,
	rotateImg: classes.rotateImg,
	exit: classes.exit,
	back: classes.back,
	collapse: classes.collapse,
	select: classes.select,
	conflictNext: classes.conflictNext,
	requestNext: classes.requestNext,
	errorNext: classes.errorNext,
	chat: classes.chat,
	requestStart: classes.requestStart,
	confirmAction: classes.confirmAction,
	confirmDanger: classes.confirmDanger,
	confirmSend: classes.confirmSend,
	upload: classes.upload,
}

// const VARIANTS = {
// 	danger: classes.danger,
// 	deal: classes.deal,
// 	default: classes.default,
// 	action: classes.action,
// }

// const SIZE = {
// 	large: classes.large,
// }

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement> & {
	action?: keyof typeof ACTIONS
	// variant?: keyof typeof VARIANTS
	// bg?: boolean
	// size?: keyof typeof SIZE
	disabled?: boolean
	open?: boolean
}

export const IconButton = ({
	action,
	// variant,
	// bg,
	// size,
	open,
	disabled,
	class: className,
	...props
}: ButtonProps) => (
	<button
		class={cn(
			classes.icon,
			classes.div,
			action && ACTIONS[action],
			// variant && VARIANTS[variant],
			// bg && classes.bg,
			// size && SIZE[size],
			open && classes.open,
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
)

