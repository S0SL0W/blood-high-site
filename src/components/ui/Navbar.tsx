
"use client"

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'GAMES', href: '#games', id: 'games' },
  { label: 'STORE', href: 'https://store.steampowered.com/app/4077400/Blood_High/', external: true },
  { label: 'ABOUT', href: '#about', id: 'about' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'games', 'about', 'community']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center pointer-events-none transition-all duration-500">
      {/* Refined Logo: ALLAF_GAMES // */}
      <div 
        className={cn(
          "group pointer-events-auto cursor-pointer relative transition-all duration-500",
          isScrolled ? "translate-y-0" : "translate-y-2"
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Sharper Tech Accents */}
        <div className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
        <div className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 border-b border-r border-primary/10 group-hover:border-primary/40 transition-colors" />
        
        <div className={cn(
          "flex items-center gap-1 px-4 py-1.5 transition-all duration-300",
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-l border-primary/80 shadow-[0_0_15px_rgba(245,22,32,0.1)]" 
            : "bg-transparent border-l border-primary/20"
        )}>
          <span className="font-headline font-medium tracking-[0.4em] text-foreground/60 group-hover:text-foreground transition-colors text-[10px]">ALLAF</span>
          <span className="font-headline font-bold tracking-tight text-primary text-sm uppercase">_GAMES</span>
          <div className="ml-1.5 flex gap-0.5 items-center opacity-20 group-hover:opacity-60 transition-opacity">
            <div className="w-[1px] h-3 bg-primary/60 rotate-[25deg]" />
            <div className="w-[1px] h-3 bg-primary/60 rotate-[25deg]" />
          </div>
        </div>

        {/* Minimalist Glitch Underline */}
        <div className="absolute -bottom-[1px] left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-out" />
      </div>
      
      <div className={cn(
        "hidden md:flex gap-8 font-headline text-[10px] tracking-[0.2em] bg-background/80 px-8 py-3 border border-white/5 pointer-events-auto backdrop-blur-md transition-all duration-500",
        isScrolled ? "translate-y-2 border-primary/20 shadow-lg" : ""
      )}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={cn(
              "relative transition-all duration-300 hover:text-primary group uppercase font-bold",
              activeSection === link.id && !link.external ? "text-primary" : "text-foreground/60"
            )}
          >
            {link.label}
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
              activeSection === link.id && !link.external ? "w-full" : ""
            )} />
          </a>
        ))}
      </div>
    </nav>
  )
}
