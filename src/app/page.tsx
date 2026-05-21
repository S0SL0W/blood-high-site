import { Hero } from '@/components/sections/Hero'
import { FeaturedGame } from '@/components/sections/FeaturedGame'
import { GameplayFeatures } from '@/components/sections/GameplayFeatures'
import { GamesPortfolio } from '@/components/sections/GamesPortfolio'
import { About } from '@/components/sections/About'
import { SocialHub } from '@/components/sections/SocialHub'
import { AtmosphericEngine } from '@/components/ui/AtmosphericEngine'
import { Navbar } from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <AtmosphericEngine />
      
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="games">
        <FeaturedGame />
        <GameplayFeatures />
        <GamesPortfolio />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="community">
        <SocialHub />
      </section>

      <footer className="py-12 bg-black border-t-4 border-primary relative z-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-headline font-bold text-xl text-primary">ALLAF GAMES</div>
            <p className="text-xs text-foreground/40 font-body">© 2026 ALLAF GAMES. ALL RIGHTS RESERVED.</p>
          </div>
          
          <div className="flex gap-12 font-headline text-[10px] tracking-widest text-foreground/60 uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-primary opacity-50">HEADQUARTERS</span>
              <span>REPUBLIC OF KOREA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-primary opacity-50">ENCRYPTION</span>
              <span>AES-256 BLOOD_V1</span>
            </div>
          </div>
          
          <div className="text-xs font-headline opacity-40">
            Website Prototype
          </div>
        </div>
      </footer>
    </main>
  )
}
