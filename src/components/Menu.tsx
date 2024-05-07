import { type Variants, motion } from 'framer-motion';
import { memo, useState } from 'react';
import { cn } from '@/lib/utils';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 12 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type MenuProps = {
  isOpen: boolean;
  close: () => void;
  menus: {
    name: string;
    url: string;
  }[];
};
export function Menu({ isOpen, close, menus }: MenuProps) {
  const [isHoverIndex, setIsHoverIndex] = useState(-1);

  return (
    <motion.ul
      className="menu"
      animate={isOpen ? 'open' : 'closed'}
      onHoverEnd={close}
      variants={{
        open: {
          clipPath: 'inset(0% 0% 0% 0% round 10px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: 'inset(10% 50% 90% 50% round 10px)',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.5,
          },
        },
      }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {menus.map((menu, index) => (
        <motion.li key={menu.name} variants={itemVariants}>
          <Item
            name={menu.name}
            active={isHoverIndex === index}
            onHover={() => setIsHoverIndex(index)}
            onClick={() => window.open(menu.url, '_blank')}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

type ItemProps = {
  active: boolean;
  onHover: () => void;
  name: string;
} & React.ComponentPropsWithRef<typeof motion.button>;
export const Item = memo(function Item({ name, active, onHover, onClick, ...props }: ItemProps) {
  return (
    <div className={cn('relative', 'flex', 'w-full', 'items-center', 'justify-center')}>
      <motion.button
        type="button"
        className="w-full px-4 text-left"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        onHoverStart={onHover}
        onClick={onClick}
      >
        {name}
      </motion.button>
      {active && (
        <motion.div
          layoutId="bg"
          transition={{
            duration: 0.2,
          }}
          className="link-bg h-10 w-full"
        />
      )}
    </div>
  );
});
