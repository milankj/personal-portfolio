import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.15}}
        >Contact</motion.div>
    )
}

export default Contact