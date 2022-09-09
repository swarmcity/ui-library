import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import classes from './icon-button.module.css'

const VARIANTS = {
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
	counter: classes.counter,
	addImage: classes.addImage,
}

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof VARIANTS
	disabled?: boolean
	open?: boolean
}

export const IconButton = ({
	children,
	variant,
	open,
	disabled,
	className,
	...props
}: IconButtonProps) => (
	<button
		className={cn(
			classes.icon,
			variant && VARIANTS[variant],
			open && classes.open,
			disabled && classes.disabled,
			className
		)}
		{...props}
	>
		{variant === 'counter' && children}
	</button>
)
