import { h } from 'preact'

// Types
import type { ComponentChildren } from 'preact'

// Style
import classes from './fullscreen-loading.module.css'

export type FullscreenLoadingProps = {
	children?: ComponentChildren
}

console.log(classes)

export const FullscreenLoading = ({ children }: FullscreenLoadingProps) => {
	return (
		<div class={classes.fullscreenLoading}>
			<header>
				{children || <h1 style={{ color: '#fafafa' }}>Loading...</h1>}
			</header>
			<div class={classes.loading}>
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}
