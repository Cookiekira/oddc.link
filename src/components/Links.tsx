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

const MENU_HOVER_INDEX = 114514

export function Links({ links }: LinksProps) {
	const [isHoverIndex, setIsHoverIndex] = useState(-1)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className="relative flex" onMouseLeave={() => setIsHoverIndex(-1)}>
			{links.map((link, index) => {
				return (
					<Button
						aria-label={link.name}
						key={link.name}
						icon={link.icon}
						active={isHoverIndex === index}
						onHover={() => setIsHoverIndex(index)}
						href={link.url}
					/>
				)
			})}

			<Button
				icon="menu"
				onHover={() => {
					setIsHoverIndex(MENU_HOVER_INDEX)
				}}
				onTap={() => setIsMenuOpen(!isMenuOpen)}
				active={isHoverIndex === MENU_HOVER_INDEX}
			/>

			<Menu isOpen={isMenuOpen} menus={menus} />
		</div>
	)
}
