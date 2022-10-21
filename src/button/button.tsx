import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import classes from './button.module.css'

const COLORS = {
	blue: classes.blue,
	'blue-light': classes.bluelight,
	green: classes.green,
	'green-light': classes.greenlight,
	red: classes.red,
	'yellow-light': classes.yellowlight,
}

const SIZE = {
	large: classes.large,
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof COLORS

	bg?: boolean
	size?: keyof typeof SIZE
	disabled?: boolean
}

export const Button = ({
	color,
	bg,
	size,
	disabled,
	className,
	...props
}: ButtonProps) => (
	<button
		className={cn(
			classes.button,
			color && COLORS[color],
			bg && classes.bg,
			size && SIZE[size],
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
)
