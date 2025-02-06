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
      className="fixed left-0 top-0 h-full bg-black/20 backdrop-blur-md z-10 border-r border-purple-300/10"
      initial={{ width: '60px' }}
      animate={{ width: isOpen ? '200px' : '60px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.button
        className="absolute top-4 right-4 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu size={20} className="text-purple-200" />
      </motion.button>
      <nav className="flex flex-col items-start pt-20 w-full">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <motion.a
              className="flex items-center w-full p-4 hover:bg-purple-500/10 text-purple-200 transition-colors relative group"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-4 relative z-10">
                <item.icon size={20} className="text-purple-300" />
                <motion.span
                  className="whitespace-nowrap font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </div>
              <motion.div
                className="absolute left-0 top-0 h-full bg-purple-500/0 w-1 group-hover:bg-purple-500/20"
                initial={{ height: '0%' }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}

