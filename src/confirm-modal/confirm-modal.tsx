import { h } from 'preact'
import cn from 'classnames'

// Components
import { IconButton } from '../icon-button/icon-button'

// Types
import type { IconButtonProps } from '../icon-button/icon-button'
import type { ComponentChildren } from 'preact'

// Style
import classes from './confirm-modal.module.css'

export type ConfirmModalProps = {
	cancel?: IconButtonProps
	confirm?: IconButtonProps
	variant?: 'action' | 'danger'
	children: ComponentChildren
}

const CONFIRM_VARIANTS: Record<
	NonNullable<ConfirmModalProps['variant']>,
	Extract<IconButtonProps['variant'], 'confirmAction' | 'confirmDanger'>
> = {
	action: 'confirmAction',
	danger: 'confirmDanger',
}

export const ConfirmModal = ({
	cancel,
	confirm,
	variant = 'action',
	children,
}: ConfirmModalProps) => {
	return (
		<div class={cn(classes.confirmModal, classes[variant])}>
			<header>{children}</header>
			<div class="buttons">
				{cancel && <IconButton variant="close" {...cancel} />}
				{confirm && (
					<IconButton variant={CONFIRM_VARIANTS[variant]} {...confirm} />
				)}
			</div>
		</div>
	)
}
