"use client"

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './theme-provider'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Cases', href: '/cases' },
  { name: 'Blog', href: '/blog' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CrossCult
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group px-3 py-2 text-sm font-medium relative overflow-hidden rounded-lg
                         hover:bg-primary/5 active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 
                               group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col h-full">
              <motion.div className="flex-1 px-4 py-8 overflow-y-auto">
                <div className="grid gap-y-8">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Link
                        to={item.href}
                        className="group flex items-center py-3 px-4 text-lg font-medium 
                                 relative overflow-hidden rounded-xl
                                 hover:bg-primary/5 active:scale-95 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative flex items-center w-full"
                        >
                          <span className="absolute left-0 w-2 h-2 rounded-full bg-primary 
                                       transform scale-0 group-hover:scale-100 transition-transform" />
                          <span className="ml-6 transform transition-transform duration-300 
                                       group-hover:translate-x-2">
                            {item.name}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Menu Footer */}
              <motion.div
                variants={itemVariants}
                className="px-4 py-6 border-t border-border/50 bg-muted/20"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Switch theme</span>
                    {mounted && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      >
                        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </Button>
                    )}
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center px-4 py-3 rounded-xl 
                             bg-primary text-primary-foreground
                             hover:bg-primary/90 active:scale-95 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}