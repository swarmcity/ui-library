import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'

// Style
import classes from './input.module.css'

export type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	id: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, children, ...props }, ref) => (
		<div className={classes.inputGroup}>
			<input id={id} required {...props} ref={ref} />
			<label htmlFor={id}>{children}</label>
		</div>
	)
)
