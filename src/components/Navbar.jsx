import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <img src="./logo.webp" className="w-25 md:w-40" alt='Fravea-logo'/>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <div id='menu' className='md:flex gap-6 items-center' >

            {/* migrated link's styles to index.css */}
            <h4>
              <a>
              Try Now
              </a>
            </h4>

            <h4>
              <a>
                Contact Us
              </a>
            </h4>
          </div>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white px-6 pt-4 pb-6 flex flex-col gap-4 shadow"
          >
            <button
              className="w-full px-5 py-3 rounded-full border hover:bg-black hover:text-white transition"
              onClick={toggleMenu}
            >
              Try Now
            </button>
            <button
              className="w-full px-5 py-3 rounded-full border hover:bg-black hover:text-white transition"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
