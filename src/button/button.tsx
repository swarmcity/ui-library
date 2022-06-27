import { h } from 'preact'
import cn from 'classnames'
import classes from './button.module.css'

const COLORS = {
	red: classes.red,
	green: classes.green,
	black: classes.black,
	white: classes.white,
}

const SIZE = {
	large: classes.large,
}

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement> & {
	color?: keyof typeof COLORS
	size?: keyof typeof SIZE
}

export const Button = ({
	color,
	size,
	disabled,
	class: className,
	...props
}: ButtonProps) => (
	<button
		class={cn(
			classes.div,
			color && COLORS[color],
			size && SIZE[size],
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
)
