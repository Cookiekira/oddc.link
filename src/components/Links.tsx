'use client'

import { useState } from 'react'
import { Button } from './Button'
import { Menu } from './Menu'
import { menus } from '@/data/me'

type LinksProps = {
	links: {
		name: string
		url: string
		icon: string
	}[]
}

export function Links({ links }: LinksProps) {
	const [hoverIndex, setHoverIndex] = useState<number | 'menu' | null>(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className="relative flex" onMouseLeave={() => setHoverIndex(null)}>
			{links.map((link, index) => {
				return (
					<Button
						aria-label={link.name}
						key={link.name}
						icon={link.icon}
						active={hoverIndex === index}
						onHover={() => setHoverIndex(index)}
						href={link.url}
					/>
				)
			})}

			<Button
				icon="menu"
				onHover={() => {
					setHoverIndex('menu')
				}}
				onTap={() => setIsMenuOpen(!isMenuOpen)}
				active={hoverIndex === 'menu'}
			/>

			<Menu isOpen={isMenuOpen} menus={menus} />
		</div>
	)
}
