// Types
import type { ReactNode } from 'react'

// Style
import classes from './fullscreen-loading.module.css'

export type FullscreenLoadingProps = {
	children?: ReactNode
}

export const FullscreenLoading = ({ children }: FullscreenLoadingProps) => {
	return (
		<div className={classes.fullscreenLoading}>
			<header>
				{children || <h1 style={{ color: '#fafafa' }}>Loading...</h1>}
			</header>
			<div className={classes.loading}>
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}
