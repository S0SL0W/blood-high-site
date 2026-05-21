
"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'

export function FeaturedGame() {
  const img1 = PlaceHolderImages.find(img => img.id === 'blood-high-1')
  const img2 = PlaceHolderImages.find(img => img.id === 'blood-high-2')

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Comic Panel Layout */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="comic-panel overflow-hidden border-4 border-white aspect-[4/5] transform hover:scale-105 transition-transform duration-500 relative">
                <Image
                  src={img1?.imageUrl || ''}
                  alt="Action 1"
                  fill
                  className="object-cover"
                  data-ai-hint={img1?.imageHint}
                />
                <div className="absolute bottom-4 left-4 bg-primary text-white font-headline px-2 py-1 text-xs">
                  BOOMER SHOOTER
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="comic-panel overflow-hidden border-4 border-primary aspect-square transform hover:-rotate-2 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={img2?.imageUrl || ''}
                    alt="Action 2"
                    fill
                    className="object-cover"
                    data-ai-hint={img2?.imageHint}
                  />
                </div>
                <div className="comic-panel bg-secondary/20 border-4 border-secondary p-6 flex flex-col justify-center transform hover:rotate-2 transition-transform duration-500">
                  <div className="text-secondary font-headline text-2xl mb-2">MAXIMUM VELOCITY</div>
                  <p className="text-xs font-body leading-relaxed opacity-70 italic">
                    "The head and body must work in chaotic tandem to survive the neon purge."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background decorative text */}
            <div className="absolute -top-10 -left-10 text-9xl font-headline font-black text-white/5 pointer-events-none select-none">
              ACTION
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-none">
              BLOOD <span className="text-primary italic">HIGH!</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/90 font-body leading-relaxed mb-8 border-l-4 border-primary pl-6">
              A vampire cursed to live with head and body separated. 
              <span className="text-primary font-bold"> Shoot blood as ammo</span>, execute enemies with your flying head, and survive nonstop blood-soaked action.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {['BOOMER SHOOTER', 'RETRO FPS', 'ANIME ACTION', 'FAST-PACED'].map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="px-4 py-1.5 border-2 border-primary/30 text-primary font-headline tracking-widest hover:bg-primary hover:text-white transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm font-headline opacity-60">
              <div className="flex flex-col gap-2">
                <span className="text-primary">PLATFORM</span>
                <span>PC / STEAM</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary">RELEASE DATE</span>
                <span>COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
