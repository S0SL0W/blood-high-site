
"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingCart, MessageSquare } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg')
  const mascotImg = PlaceHolderImages.find(img => img.id === 'oracle-head')

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* 1. Fullscreen Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[30000ms] ease-out"
          style={{ 
            backgroundImage: heroBg?.imageUrl ? `url(${heroBg.imageUrl})` : 'none',
          }}
        >
          {/* Cinematic Overlay Stack */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60 z-10" />
          <div className="absolute inset-0 vignette opacity-90 z-10" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-color-dodge z-10 pointer-events-none" />
          
          {/* Subtle Scanlines & Post-Processing */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%] animate-scanline" />
        </div>
      </div>

      {/* 2. Left Side Visual Composition Area (40% Split) - Mascot Anchor */}
      <div className="absolute left-[2%] bottom-[15%] z-30 hidden lg:block pointer-events-none w-[45%] h-[80%]">
        <div className="relative w-full h-full flex items-end justify-center animate-float">
          {/* Ambient Glows behind mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary/20 rounded-full blur-[160px] animate-pulse opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700 opacity-30" />
          
          {/* Atmospheric Focal Point / Blood Mist */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/15 blur-[100px] opacity-50 mix-blend-screen" />

          {/* Large Floating Mascot Render */}
          {mascotImg && (
            <div className="relative w-full h-full flex items-end justify-center group">
              <Image
                src={mascotImg.imageUrl}
                alt="Blood High Mascot"
                width={1200}
                height={1200}
                className="object-contain drop-shadow-[0_0_80px_rgba(245,22,32,0.5)] transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={mascotImg.imageHint}
                priority
              />
              {/* Soft Shadow Fade Beneath */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-black/60 blur-3xl rounded-full opacity-40" />
            </div>
          )}
        </div>
      </div>

      {/* 3. Right Side Content Area (Shifted further Right) */}
      <div className="container relative z-40 px-4 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center pt-20 pb-12">
        {/* Spacer to push content significantly to the right */}
        <div className="hidden lg:block h-1" />
        
        <div className="flex flex-col items-start text-left lg:pl-16 lg:border-l border-white/5">
          <div className="mb-6 flex items-center gap-3 opacity-80">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="font-headline text-[10px] tracking-[0.5em] uppercase text-primary font-bold">ALLAF GAMES // CORE_PROTOCOL</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold text-white mb-10 tracking-tighter text-glitch leading-[0.85] select-none">
            BLOOD <br />
            <span className="text-primary italic">HIGH!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-xl mb-14 font-body font-medium border-l-4 border-primary pl-8 leading-relaxed drop-shadow-sm transition-all">
            A vampire cursed to live with head and body separated. Shoot blood as ammo, survive nonstop carnage, and dive into stylish retro FPS chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
            <Button 
              size="lg" 
              asChild
              className="h-20 px-14 bg-primary hover:bg-primary/90 text-white font-headline text-2xl group blood-slash rounded-none border-b-4 border-black/40 arcade-glow transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,22,32,0.5)] hover:shadow-[0_0_60px_rgba(245,22,32,0.7)]"
            >
              <a href="https://store.steampowered.com/app/4077400/Blood_High/" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-5 h-9 w-9" />
                WISHLIST NOW
                <ArrowRight className="ml-5 h-9 w-9 group-hover:translate-x-3 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="h-20 px-14 border-2 border-white/20 text-white hover:bg-white/10 font-headline text-2xl rounded-none blood-slash transition-all duration-300 hover:border-primary/60 group hover:scale-105 active:scale-95 shadow-lg"
            >
              <a href="https://discord.com/invite/HnJK723uPD" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-5 h-9 w-9 text-white/60 group-hover:text-primary transition-colors" />
                COMMUNITY
              </a>
            </Button>
          </div>
          
          {/* HUD Info Elements */}
          <div className="mt-20 flex gap-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="flex flex-col gap-1">
              <span className="font-headline text-[8px] text-primary tracking-widest uppercase font-bold">System Status</span>
              <span className="font-headline text-sm font-bold tracking-tighter">ALLAF_B_V2</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline text-[8px] text-primary tracking-widest uppercase font-bold">Visual Protocol</span>
              <span className="font-headline text-sm font-bold tracking-tighter">RETRO_NEON</span>
            </div>
            <div className="hidden md:flex flex-col gap-1">
              <span className="font-headline text-[8px] text-primary tracking-widest uppercase font-bold">Encryption</span>
              <span className="font-headline text-sm font-bold tracking-tighter text-glitch">BLOOD_AES</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Global Post-Processing Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 vignette opacity-80" />
    </section>
  )
}
