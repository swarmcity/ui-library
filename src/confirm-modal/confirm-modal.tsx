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
	color?: 'action' | 'danger'
	children: ComponentChildren
}

const CONFIRM_VARIANTS: Record<
	NonNullable<ConfirmModalProps['color']>,
	Extract<
		IconButtonProps['variant'],
		'confirmAction' | 'confirmDanger' | 'confirmDeal'
	>
> = {
	action: 'confirmAction',
	danger: 'confirmDanger',
}

export const ConfirmModal = ({
	cancel,
	confirm,
	color = 'action',
	children,
}: ConfirmModalProps) => {
	return (
		<div class={cn(classes.confirmModal, classes[color])}>
			<header>{children}</header>
			<div class="buttons">
				{cancel && <IconButton variant="close" {...cancel} />}
				{confirm && (
					<IconButton variant={CONFIRM_VARIANTS[color]} {...confirm} />
				)}
			</div>
		</div>
	)
}
