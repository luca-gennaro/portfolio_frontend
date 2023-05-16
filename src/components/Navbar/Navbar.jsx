import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const handleMenuToggle = () => {
    setToggle(!toggle)
  }
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'portfolio', 'skills', 'contact'].map(item => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={handleMenuToggle} />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={handleMenuToggle} />
                <ul>
                  {['home', 'about', 'portfolio', 'skills', 'contact'].map(item => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={handleMenuToggle}>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar