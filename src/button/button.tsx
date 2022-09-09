import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import classes from './button.module.css'

const VARIANTS = {
	danger: classes.danger,
	deal: classes.deal,
	default: classes.default,
	action: classes.action,
}

const SIZE = {
	large: classes.large,
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof VARIANTS
	bg?: boolean
	size?: keyof typeof SIZE
	disabled?: boolean
}

export const Button = ({
	variant,
	bg,
	size,
	disabled,
	className,
	...props
}: ButtonProps) => (
	<button
		className={cn(
			classes.button,
			variant && VARIANTS[variant],
			bg && classes.bg,
			size && SIZE[size],
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
)
