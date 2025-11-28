import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Reveal = ({ children, as: Tag = 'div', delay = 0, ...rest }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
};

export default Reveal;


