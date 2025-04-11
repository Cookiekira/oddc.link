import { type Variants, m } from 'motion/react'
import { memo, useState } from 'react'
import { cn } from '@/lib/utils'

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 12 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

type MenuProps = {
	isOpen: boolean
	menus: {
		name: string
		url: string
	}[]
}
export const Menu = memo(function Menu({ isOpen, menus }: MenuProps) {
	const [isHoverIndex, setIsHoverIndex] = useState(-1)

	return (
		<m.ul
			className="menu"
			initial={'closed'}
			animate={isOpen ? 'open' : 'closed'}
			variants={{
				open: {
					clipPath: 'inset(0% 0% 0% 0% round 10px)',
					transition: {
						type: 'spring',
						bounce: 0,
						duration: 0.4,
						delayChildren: 0.2,
						staggerChildren: 0.05,
					},
				},
				closed: {
					clipPath: 'inset(90% 10% 10% 90% round 10px)',
					transition: {
						type: 'spring',
						bounce: 0,
						duration: 0.4,
					},
				},
			}}
			style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			onHoverEnd={() => setIsHoverIndex(-1)}
		>
			{menus.map((menu, index) => (
				<m.li key={menu.name} variants={itemVariants}>
					<Item
						name={menu.name}
						active={isHoverIndex === index}
						onHover={() => setIsHoverIndex(index)}
						href={menu.url}
					/>
				</m.li>
			))}
		</m.ul>
	)
})

type ItemProps = {
	active: boolean
	onHover: () => void
	name: string
	href?: string
} & React.ComponentPropsWithRef<typeof m.button>
export const Item = memo(function Item({ href = '#', name, active, onHover, ...props }: ItemProps) {
	return (
		<div className={cn('relative', 'flex', 'w-full', 'items-center', 'justify-center')}>
			<m.button
				type="button"
				className="flex w-full px-4 text-left"
				initial={{ opacity: 0.6 }}
				whileHover={{ opacity: 1 }}
				whileTap={{ opacity: 1 }}
				onHoverStart={onHover}
				{...props}
			>
				<a className="w-full" href={href} target={href === '#' ? '_self' : '_blank'}>
					{name}
				</a>
			</m.button>
			{active && (
				<m.div
					layoutId="bg"
					transition={{
						duration: 0.2,
					}}
					className="link-bg h-10 w-full"
				/>
			)}
		</div>
	)
})
