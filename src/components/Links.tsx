'use client';

import { motion} from 'framer-motion';
import { Icon } from './Icons';
import { useState } from 'react';

type LinksProps = {
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
};

export function Links(props: LinksProps) {
  const [isHoverIndex, setIsHoverIndex] = useState(-1);

  return (
    <div className="flex" onMouseLeave={() => setIsHoverIndex(-1)}>
      {props.links.map((link, index) => {
        return (
          <div key={link.name} className="relative flex w-10 items-center justify-center">
            <motion.button
              type="button"
              initial={{ opacity: 0.6 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              onHoverStart={() => setIsHoverIndex(index)}
              onClick={() => window.open(link.url, '_blank')}
            >
              <Icon name={link.icon} className="h-8 w-8" />
            </motion.button>
            {isHoverIndex == index && <motion.div layoutId="bg" className="link-bg h-10 w-10" />}
          </div>
        );
      })}
    </div>
  );
}
