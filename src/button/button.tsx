import { h } from "preact";
import cn from "classnames";
import classes from "./button.module.css";

const VARIANTS = {
	danger: classes.danger,
	progress: classes.progress,
	default: classes.default,
	info: classes.info,
};

const SIZE = {
	large: classes.large,
}

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement> & {
	variant?: keyof typeof VARIANTS;
	bg?: boolean;
	size?: keyof typeof SIZE;
	disabled?: boolean;
};

export const Button = ({
	variant,
	bg,
	size,
	disabled,
	class: className,
	...props
}: ButtonProps) => (
	<button
		class={cn(
			classes.div,
			variant && VARIANTS[variant],
			bg && classes.bg,
			size && SIZE[size],
			disabled && classes.disabled,
			className
		)}
		{...props}
	/>
);
