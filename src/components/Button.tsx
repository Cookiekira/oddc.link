import { m } from 'motion/react'
import { Icon } from './Icons'
import { memo } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
	active: boolean
	onHover: () => void
	icon: string
	href?: string
} & React.ComponentPropsWithRef<typeof m.button>
export const Button = memo(function Button({ href = '#', active, onHover, onTap, icon }: ButtonProps) {
	return (
		<div className={cn('relative flex w-10 items-center justify-center')}>
			<m.button
				type="button"
				initial={{ opacity: 0.6 }}
				whileHover={{ scale: 1.1, opacity: 1 }}
				whileTap={{ scale: 1.1, opacity: 1 }}
				onHoverStart={onHover}
				onTap={onTap}
			>
				<a href={href} target={href === '#' ? '_self' : '_blank'}>
					{icon && <Icon name={icon} className="h-8 w-8" />}
				</a>
			</m.button>
			{active && (
				<m.div
					layoutId="bg"
					transition={{
						duration: 0.2,
					}}
					className="link-bg h-10 w-10"
				/>
			)}
		</div>
	)
})
