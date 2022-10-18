import cn from 'classnames'

// Components
import { IconButton } from '../icon-button/icon-button'

// Types
import type { IconButtonProps } from '../icon-button/icon-button'
import type { ReactNode } from 'react'

// Style
import classes from './confirm-modal.module.css'

export type ConfirmModalProps = {
	cancel?: IconButtonProps
	confirm?: IconButtonProps
	variant?: 'action' | 'danger' | 'deal'
	children: ReactNode
}

const CONFIRM_VARIANTS: Record<
	NonNullable<ConfirmModalProps['variant']>,
	Extract<
		IconButtonProps['variant'],
		'confirmAction' | 'confirmDanger' | 'confirmDeal'
	>
> = {
	action: 'confirmAction',
	danger: 'confirmDanger',
	deal: 'confirmDeal',
}

export const ConfirmModal = ({
	cancel,
	confirm,
	variant = 'action',
	children,
}: ConfirmModalProps) => {
	return (
		<div className={cn(classes.confirmModal, classes[variant])}>
			<header>{children}</header>
			<div className="buttons">
				{cancel && <IconButton variant="close" {...cancel} />}
				{confirm && (
					<IconButton variant={CONFIRM_VARIANTS[variant]} {...confirm} />
				)}
			</div>
		</div>
	)
}
