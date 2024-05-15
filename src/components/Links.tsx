'use client';

import { useCallback, useState } from 'react';
import { Button } from './Button';
import { Menu } from './Menu';
import { menus } from '@/data/me';

type LinksProps = {
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
};

const MENU_HOVER_INDEX = 114514;

export function Links(props: LinksProps) {
  const [isHoverIndex, setIsHoverIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex" onMouseLeave={useCallback(() => setIsHoverIndex(-1), [])}>
      {props.links.map((link, index) => {
        return (
          <Button
            key={link.name}
            icon={link.icon}
            active={isHoverIndex === index}
            onHover={useCallback(() => setIsHoverIndex(index), [index])}
            href={link.url}
          />
        );
      })}

      <Button
        icon="menu"
        onHover={useCallback(() => {
          setIsHoverIndex(MENU_HOVER_INDEX);
        }, [])}
        onTap={useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])}
        active={isHoverIndex === MENU_HOVER_INDEX}
      />

      <Menu isOpen={isMenuOpen} menus={menus} />
    </div>
  );
}
