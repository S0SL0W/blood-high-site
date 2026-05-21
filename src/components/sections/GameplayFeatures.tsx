
"use client"

import React, { useState, useEffect } from 'react'
import { Droplets, Zap, Target, Shield, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { cn } from '@/lib/utils'

const FEATURES = [
  {
    icon: Droplets,
    title: "BLOOD AS AMMO",
    desc: "Every shot counts. Absorb blood from fallen enemies to replenish your arsenal and stay alive in the chaos.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "THE HIGH STATE",
    desc: "Maintain momentum to enter the 'High' state. Experience extreme speed, increased damage, and lethal agility.",
    color: "secondary"
  },
  {
    icon: Target,
    title: "SEVERED EXECUTION",
    desc: "Launch your head as a lethal projectile. Wipe out clusters of enemies and execute bosses with stylish precision.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "RETRO ADAPTATION",
    desc: "Classic FPS mechanics meet modern stylish action. A fast-paced nightmare inspired by the golden era of shooters.",
    color: "secondary"
  }
]

function GameplayShowcase() {
  // Select at least 3 relevant images for the showcase
const images = [
  PlaceHolderImages.find(img => img.id === 'x-invader')!,
  PlaceHolderImages.find(img => img.id === 'x-invader-prologue')!,
  PlaceHolderImages.find(img => img.id === 'savior-abyss')!,
]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Slightly longer duration for better immersion
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative aspect-video border-2 border-primary/30 overflow-hidden group cursor-crosshair">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none group-hover:bg-primary/0 transition-colors duration-500" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%]" />

      {/* Images with Ken Burns Effect */}
      {images.map((img, index) => (
        <div
          key={img.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionProperty: 'opacity', transitionDuration: '1.5s' }}
        >
          <Image
            src={img.imageUrl}
            alt={img.description}
            fill
            className={cn(
              "object-cover transition-transform duration-[7000ms] ease-linear",
              index === currentIndex ? "scale-110 translate-x-2" : "scale-100"
            )}
            data-ai-hint={img.imageHint}
          />
        </div>
      ))}

      {/* HUD Info */}
      <div className="absolute top-4 left-4 z-30 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <span className="font-headline text-[8px] text-primary tracking-widest uppercase font-bold">Live_Capture</span>
        </div>
        <div className="font-headline text-[10px] text-white/40 tracking-tighter">CAM_0{currentIndex + 1} // FEED_STABLE</div>
      </div>

      <div className="absolute bottom-4 right-4 z-30 flex flex-col items-end gap-1">
        <div className="bg-primary text-white text-[8px] font-headline px-2 py-0.5 arcade-glow uppercase">
          Gameplay_Preview_v0.9
        </div>
        <div className="text-[8px] font-headline text-primary opacity-50 tracking-widest">
          SYNCING_VISUALS...
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/40 z-30" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/40 z-30" />
    </div>
  )
}

export function GameplayFeatures() {
  return (
    <section className="py-24 bg-card/30 border-y border-primary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-headline tracking-widest px-4 py-1">
            COMBAT_LOG_V1.0
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">
            CORE <span className="text-primary italic">PROTOCOLS</span>
          </h2>
          <p className="text-lg font-body text-foreground/60 max-w-2xl">
            Master the art of high-speed carnage. Survival in the neon-soaked arenas requires perfect synergy between your head and body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <Card key={idx} className="bg-background/40 border-2 border-primary/10 hover:border-primary/40 transition-all duration-500 group rounded-none relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5">
                <feature.icon className="w-16 h-16" />
              </div>
              <CardContent className="p-8">
                <div className={`w-12 h-12 flex items-center justify-center mb-6 border-2 ${feature.color === 'primary' ? 'border-primary text-primary' : 'border-secondary text-secondary'} blood-slash`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-foreground/70 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-headline text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  SYSTEM_LINKED <ArrowRight className="w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center bg-black/60 p-8 border-4 border-primary/20 comic-panel group">
          <div>
            <div className="mb-4 flex items-center gap-2 opacity-50">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="font-headline text-[8px] tracking-[0.3em] uppercase">Visual_Output</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6">OPTIMIZED FOR <span className="text-primary italic">STYLE</span></h3>
            <p className="font-body text-foreground/80 mb-8 italic border-l-4 border-primary pl-6 text-lg leading-relaxed">
              "It's not just about killing; it's about how much blood you can spill in one fluid motion."
            </p>
            <ul className="space-y-4 font-headline text-[10px] tracking-widest text-foreground/40">
              <li className="flex items-center gap-3 group-hover:text-primary transition-colors">
                <div className="w-1.5 h-1.5 bg-primary blood-slash" /> 
                PIXEL-PERFECT COLLISION DETECTION
              </li>
              <li className="flex items-center gap-3 group-hover:text-primary transition-colors">
                <div className="w-1.5 h-1.5 bg-primary blood-slash" /> 
                DYNAMIC GORE & DISMEMBERMENT SYSTEM
              </li>
              <li className="flex items-center gap-3 group-hover:text-primary transition-colors">
                <div className="w-1.5 h-1.5 bg-primary blood-slash" /> 
                FRAME-CANCEL & DASH-CANCEL ABILITIES
              </li>
            </ul>
          </div>
          
          <GameplayShowcase />
        </div>
      </div>
    </section>
  )
}
