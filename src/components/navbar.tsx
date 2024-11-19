"use client"

import { Link } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Cases", href: "/cases" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 
                         bg-clip-text text-transparent hover:scale-105 transition-all"
              >
                CrossCult
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium 
                           text-foreground hover:text-primary 
                           relative after:absolute after:bottom-0 after:left-0 after:right-0 
                           after:h-0.5 after:bg-primary after:scale-x-0 
                           hover:after:scale-x-100 after:transition-transform"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-full bg-primary/10 
                         hover:bg-primary/20 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 flex flex-col justify-center gap-1.5 transition-all">
                    <span 
                      className={`block h-0.5 w-6 bg-foreground transform transition-all duration-300
                                ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <span 
                      className={`block h-0.5 bg-foreground transform transition-all duration-300
                                ${isOpen ? 'w-0' : 'w-6'}`}
                    />
                    <span 
                      className={`block h-0.5 w-6 bg-foreground transform transition-all duration-300
                                ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`sm:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg
                   transform transition-all duration-500 ease-in-out border-b
                   ${isOpen ? 'translate-y-0 opacity-100 h-[calc(100vh-4rem)]' : '-translate-y-full opacity-0 h-0'}`}
      >
        <div className={`h-full flex flex-col ${isOpen ? 'animate-in fade-in-50 duration-500' : ''}`}>
          <div className="px-4 py-6 flex-1 overflow-y-auto">
            <div className="grid gap-y-8">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{ 
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                  className={`group flex items-center py-3 text-base font-medium 
                           relative overflow-hidden rounded-xl
                           ${isOpen ? 'animate-in slide-in-from-left-8 duration-300' : ''}
                           hover:bg-primary/5 active:scale-98 transition-all`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center">
                    <span className="mr-4 text-primary opacity-0 group-hover:opacity-100 
                                   transition-all duration-300 transform -translate-x-4 
                                   group-hover:translate-x-0">
                      •
                    </span>
                    <span className="transform transition-transform duration-300 
                                   group-hover:translate-x-2">
                      {item.name}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-4 py-6 border-t border-border/50 bg-muted/20 animate-in fade-in-50 duration-700 delay-500">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground relative overflow-hidden">
                Ready to start your journey?
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 
                               transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </p>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center px-4 py-3 rounded-xl 
                         bg-primary text-primary-foreground relative overflow-hidden
                         hover:shadow-lg hover:shadow-primary/25 active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 
                              hover:opacity-100 transition-opacity" />
                <span className="relative">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}