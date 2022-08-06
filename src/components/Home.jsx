import React from 'react'
import { motion } from 'framer-motion'

function Home() {
    return (
        <motion.div
            className='home ms-5 mt-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.15}}
        >
            <div className=' col-lg-6'>
            <h4>Hi, I'm Milan</h4>
            <h1 className='mt-5'><i>“First, solve the problem. Then, write the code.”</i></h1><sup className='ms-5'>-<i>John Johnson</i></sup>
            <p className='mt-5'>I'm a MERN Stack developer</p>
            </div>
        </motion.div>
    )
}

export default Home