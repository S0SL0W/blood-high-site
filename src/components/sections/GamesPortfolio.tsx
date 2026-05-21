"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Gamepad2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const OTHER_GAMES = [
  {
    id: 'x-invader',
    title: 'X INVADER',
    desc: 'Stylish roguelite bullet hell shooter. Pure arcade adrenaline.',
    imgId: 'x-invader',
    color: 'primary',
    mood: 'hover:shadow-[0_0_40px_rgba(245,22,32,0.3)]',
    overlay: 'bg-primary/10',
    href: 'https://store.steampowered.com/app/2090760/X_Invader/?curator_clanid=43501780'
  },
  {
    id: 'x-invader-prologue',
    title: 'X INVADER: PROLOGUE',
    desc: 'The beginning of the invasion. A darker, more cinematic prologue.',
    imgId: 'x-invader-prologue',
    color: 'secondary',
    mood: 'hover:shadow-[0_0_40px_rgba(255,0,157,0.3)]',
    overlay: 'bg-secondary/10',
    href: 'https://store.steampowered.com/app/2214500/X_Invader_Prologue/?curator_clanid=43501780'
  },
  {
    id: 'savior-of-the-abyss',
    title: 'SAVIOR OF THE ABYSS',
    desc: 'Unsettling horror exploration with deep atmospheric tension.',
    imgId: 'savior-abyss',
    color: 'accent',
    mood: 'hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]',
    overlay: 'bg-white/5',
    href: 'https://store.steampowered.com/app/1590640/Savior_of_the_Abyss/?curator_clanid=43501780'
  }
]

export function GamesPortfolio() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16 border-b-4 border-primary/20 pb-6">
          <div className="flex flex-col gap-2">
            <span className="font-headline text-[10px] tracking-[0.4em] text-primary font-bold">ALLAF_ARCHIVE //</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold">
              SYSTEM <span className="text-primary italic">[GAMES]</span>
            </h2>
          </div>
          <div className="hidden md:block font-headline text-primary opacity-50 animate-pulse text-[10px] tracking-[0.3em] font-bold">
            INSERT COIN TO INITIALIZE
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {OTHER_GAMES.map((game) => {
            const img = PlaceHolderImages.find(i => i.id === game.imgId)
            return (
              <a 
                key={game.id} 
                href={game.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card 
                  className={cn(
                    "bg-card border-2 border-muted hover:border-primary/40 transition-all duration-700 overflow-hidden rounded-none h-full hover:-translate-y-2 hover:scale-[1.02]",
                    game.mood
                  )}
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {/* Unique Mood Overlay */}
                    <div className={cn(
                      "absolute inset-0 z-10 transition-opacity duration-700 opacity-40 group-hover:opacity-60",
                      game.overlay
                    )} />
                    
                    <Image
                      src={img?.imageUrl || ''}
                      alt={game.title}
                      fill
                      className="object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-1000"
                      data-ai-hint={img?.imageHint}
                    />
                    
                    {/* CRT Scanline Overlay per Card */}
                    <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />
                    
                    <div className="absolute top-4 right-4 bg-primary p-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 arcade-glow z-30">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="font-headline text-white text-[10px] tracking-[0.4em] border-2 border-primary/60 px-6 py-2 bg-black/60 shadow-[0_0_20px_rgba(245,22,32,0.4)]">
                        LAUNCH_STEAM
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "w-1.5 h-1.5 animate-pulse",
                        game.color === 'primary' ? 'bg-primary' : game.color === 'secondary' ? 'bg-secondary' : 'bg-white'
                      )} />
                      <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors text-glitch tracking-tighter">
                        {game.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm font-body text-foreground/50 mb-8 line-clamp-2 italic leading-relaxed border-l-2 border-primary/20 pl-4">
                      {game.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary font-headline text-[9px] tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 font-bold">
                        <Gamepad2 className="w-3.5 h-3.5" />
                        STATUS: READY
                      </div>
                      <div className="text-[8px] font-headline text-foreground/20 group-hover:text-primary/40 transition-colors">
                        STEAM_ID_ARCHIVE
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
