import { h } from 'preact'
import cn from 'classnames'
import classes from './button.module.css'

const BGCOLORS = {
	danger: classes.bgDanger,
	success: classes.bgSuccess,
	primary: classes.bgPrimary,
	light: classes.bgLight,
}

const COLORS = {
	danger: classes.danger,
	success: classes.success,
	dark: classes.dark,
	light: classes.light,
}

const SIZE = {
	large: classes.large,
}

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement> & {
	bgColor?: keyof typeof BGCOLORS
	color?: keyof typeof COLORS
	size?: keyof typeof SIZE
}

export const Button = ({
	bgColor,
	color,
	size,
	disabled,
	class: className,
	...props
}: ButtonProps) => (
	<button
		class={cn(
			classes.div,
			bgColor && BGCOLORS[bgColor],
			color && COLORS[color],
			size && SIZE[size],
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
)
