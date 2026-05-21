
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, MessageSquare, Twitter, Share2 } from 'lucide-react'

export function SocialHub() {
  return (
    <section className="py-24 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Share2 className="w-12 h-12 text-primary mb-4 animate-bounce" />
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center">CONNECT TO THE HUB</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Button 
            variant="outline" 
            asChild
            className="h-24 text-2xl font-headline border-4 border-primary/30 hover:border-primary hover:bg-primary/10 group rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,22,32,0.2)]"
          >
            <a href="https://store.steampowered.com/app/4077400/Blood_High/" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-4 w-8 h-8 group-hover:scale-110 transition-transform" />
              STEAM
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="h-24 text-2xl font-headline border-4 border-secondary/30 hover:border-secondary hover:bg-secondary/10 group rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,157,0.2)]"
          >
            <a href="https://discord.com/invite/HnJK723uPD" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-4 w-8 h-8 group-hover:scale-110 transition-transform" />
              DISCORD
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="h-24 text-2xl font-headline border-4 border-foreground/30 hover:border-foreground hover:bg-foreground/10 group rounded-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            <a href="https://x.com/Allaf_Games" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-4 w-8 h-8 group-hover:scale-110 transition-transform" />
              X / TWITTER
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
