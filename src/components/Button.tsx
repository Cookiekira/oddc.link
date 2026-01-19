'use client'

import { cn } from '@/lib/utils'
import { m } from 'motion/react'
import { Icon } from './Icons'

type ButtonProps = {
	active: boolean
	onHover: () => void
	icon: string
	href?: string
	onTap?: () => void
	'aria-label'?: string
}

export function Button({ href = '#', active, onHover, onTap, icon, 'aria-label': ariaLabel }: ButtonProps) {
	const content = (
		<>
			{icon && <Icon name={icon} className="h-8 w-8" />}
			{active && (
				<m.div
					layoutId="bg"
					transition={{
						duration: 0.2,
					}}
					className="link-bg h-10 w-10"
				/>
			)}
		</>
	)

	// If it's a menu button (no real href), render as button
	if (href === '#') {
		return (
			<div className={cn('relative flex w-10 items-center justify-center')}>
				<m.button
					type="button"
					aria-label={ariaLabel}
					initial={{ opacity: 0.6 }}
					whileHover={{ scale: 1.1, opacity: 1 }}
					whileTap={{ scale: 1.1, opacity: 1 }}
					onHoverStart={onHover}
					onTap={onTap}
				>
					{content}
				</m.button>
			</div>
		)
	}

	// If it has a real href, render as anchor
	return (
		<div className={cn('relative flex w-10 items-center justify-center')}>
			<m.a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ariaLabel}
				initial={{ opacity: 0.6 }}
				whileHover={{ scale: 1.1, opacity: 1 }}
				whileTap={{ scale: 1.1, opacity: 1 }}
				onHoverStart={onHover}
				onTap={onTap}
			>
				{content}
			</m.a>
		</div>
	)
}
