// Types
import type { ReactNode } from 'react'
import { Typography } from '../typography/typography'

// Style
import classes from './fullscreen-loading.module.css'

export type FullscreenLoadingProps = {
	children?: ReactNode
}

export const FullscreenLoading = ({ children }: FullscreenLoadingProps) => {
	return (
		<div className={classes.fullscreenLoading}>
			<Typography variant="header-35" color="white">
				{children || 'Loading...'}
			</Typography>
			<div className={classes.loading}>
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}
