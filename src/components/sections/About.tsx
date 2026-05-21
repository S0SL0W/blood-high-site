
"use client"

import React from 'react'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-primary/10">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Tech Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with Terminal Accents */}
          <div className="flex flex-col items-center text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gradient-to-t from-primary/40 to-transparent" />
            
            <div className="inline-block p-2 bg-primary/5 text-primary font-headline text-[10px] tracking-[0.3em] mb-8 border border-primary/20 backdrop-blur-sm">
              SYSTEM_INFO // STUDIO_MANIFESTO
            </div>
            
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-10 tracking-tighter text-glitch">
              ALLAF <span className="text-primary italic">GAMES</span>
            </h2>
            
            <div className="relative">
              {/* Decorative Brackets */}
              <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
              <div className="absolute -right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
              
              <p className="text-2xl md:text-3xl font-body leading-relaxed text-foreground/90 italic max-w-2xl mx-auto px-4">
                "Focused on 
                <span className="text-primary font-bold not-italic px-2">stylish action</span>, 
                unique systems, and a strong visual identity that hits like a 
                <span className="text-primary font-bold not-italic px-2">bullet to the brain</span>."
              </p>
            </div>
          </div>
          
          {/* Stats/Info Grid with Lore-style borders */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
            {[
              { label: 'BASE_OPS', val: 'REPUBLIC OF KOREA' },
              { label: 'CORE_GENRE', val: 'STYLISH_ACTION' },
              { label: 'VISUAL_FX', val: 'RETRO_NEON' },
              { label: 'OBJECTIVE', val: 'PURE_IMPACT' },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="flex flex-col gap-2 bg-background/60 backdrop-blur-md p-6 group hover:bg-primary/5 transition-colors duration-500"
              >
                <span className="text-[9px] font-headline text-primary/60 tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
                  {stat.label}
                </span>
                <span className="text-sm font-headline font-bold tracking-tight text-foreground/80">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Encryption Text (Aesthetic Only) */}
          <div className="mt-12 flex justify-center gap-8 opacity-20 hover:opacity-40 transition-opacity duration-700 pointer-events-none">
            <div className="font-headline text-[8px] tracking-widest uppercase">
              ENCRYPTION: AES-256-BLOOD
            </div>
            <div className="font-headline text-[8px] tracking-widest uppercase">
              STATUS: TRANSMITTING...
            </div>
          </div>
        </div>
      </div>

      {/* Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </section>
  )
}
