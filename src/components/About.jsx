import React from 'react'
import {motion} from 'framer-motion'
function About() {
    return (
        <motion.div
            className='about p-5 ms-5 me-5 mt-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.15}} 
        >
            <img src='/images/profile-pic.png' className='mx-auto d-block profile-pic rounded-circle' />
            <div className='about-info'>
                <p><b>BTech Computer Science Graduate</b></p>
                <p>My name is Milan K Jain. I'm a MERN stack developer.I've completed my Bachelor's degree from Amal jyothi college of Engineering,Kerala.</p>
            </div>
        </motion.div>
    )
}

export default About