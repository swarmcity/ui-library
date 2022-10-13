import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

// Style
import classes from './input.module.css'

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	id: string
}

export const Input = ({ id, children, ...props }: InputProps) => (
	<div className={classes.inputGroup}>
		<input id={id} required {...props} />
		<label htmlFor={id}>{children}</label>
	</div>
)
