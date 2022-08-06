import React from 'react'
import { motion } from 'framer-motion'
function Works() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.15}}
        >Works</motion.div>
    )
}

export default Works