'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Code, Mail, Menu } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: Briefcase, label: 'Projects', href: '#projects' },
  { icon: Mail, label: 'Contact', href: '#contact' },
]

export function VerticalMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="fixed left-0 top-0 h-full bg-white/10 backdrop-blur-sm text-white z-10"
      initial={{ width: '60px' }}
      animate={{ width: isOpen ? '200px' : '60px' }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="absolute top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={24} />
      </motion.button>
      <nav className="flex flex-col items-center pt-20">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <motion.a
              className="flex items-center w-full p-4 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={24} />
              <motion.span
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </motion.a>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

