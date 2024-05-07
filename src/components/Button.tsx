import { motion } from 'framer-motion';
import { Icon } from './Icons';
import { memo } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  active: boolean;
  onHover: () => void;
  icon: string;
  href?: string;
} & React.ComponentPropsWithRef<typeof motion.button>;
export const Button = memo(function Button({ href = '#', active, onHover, onClick, icon, ...props }: ButtonProps) {
  return (
    <div className={cn('relative flex w-10 items-center justify-center')}>
      <motion.button
        type="button"
        initial={{ opacity: 0.6 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        onHoverStart={onHover}
        {...props}
      >
        <a href={href} target={href === '#' ? '_self' : '_blank'}>
          {icon && <Icon name={icon} className="h-8 w-8" />}
        </a>
      </motion.button>
      {active && (
        <motion.div
          layoutId="bg"
          transition={{
            duration: 0.2,
          }}
          className="link-bg h-10 w-10"
        />
      )}
    </div>
  );
});
