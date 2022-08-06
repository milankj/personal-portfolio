import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Works from './Works'
import Skills from './Skills'
import {AnimatePresence} from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/works' element={<Works />} />
                <Route path='/skills' element={<Skills/>}/>
            </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes