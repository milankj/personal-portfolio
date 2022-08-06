import React from 'react'
import { motion } from 'framer-motion'
function Skills() {
  return (
    <motion.div
      iinitial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{duration: 0.15}}
    >Skills</motion.div>
  )
}

export default Skills