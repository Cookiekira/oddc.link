'use client';

import { useState } from 'react';
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

export function Links(props: LinksProps) {
  const [isHoverIndex, setIsHoverIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex" onMouseLeave={() => setIsHoverIndex(-1)}>
      {props.links.map((link, index) => {
        return (
          <Button
            key={link.name}
            icon={link.icon}
            active={isHoverIndex === index}
            onHover={() => setIsHoverIndex(index)}
            href={link.url}
          />
        );
      })}

      <Button
        icon="menu"
        onHover={() => {
          setIsHoverIndex(100);
        }}
        onTap={() => setIsMenuOpen(!isMenuOpen)}
        active={isHoverIndex === 100}
      />

      <Menu isOpen={isMenuOpen} menus={menus} />
    </div>
  );
}
