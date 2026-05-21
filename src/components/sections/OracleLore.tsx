
"use client"

import React, { useState } from 'react'
import { oracleHeadLoreMaster } from '@/ai/flows/oracle-head-lore-master'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Send, Ghost, Zap } from 'lucide-react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function OracleLore() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const oracleImg = PlaceHolderImages.find(img => img.id === 'oracle-head')

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || loading) return

    setLoading(true)
    try {
      const res = await oracleHeadLoreMaster({ question })
      setAnswer(res.answer)
    } catch (err) {
      setAnswer("The transmission is failing... blood levels too low.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-card border-y border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary arcade-glow">
                <Image
                  src={oracleImg?.imageUrl || ''}
                  alt="Oracle Head"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  data-ai-hint={oracleImg?.imageHint}
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white font-headline px-3 py-1 text-xs whitespace-nowrap">
                ORACLE HEAD AI
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-headline font-bold mb-4 flex items-center gap-3">
                <Zap className="text-primary w-8 h-8" />
                LORE MASTER
              </h2>
              <p className="text-lg font-body text-foreground/70 mb-6 italic leading-relaxed">
                "I am the remains of the hero. Ask me of the blood, the enemies, or the curse that binds us. I see all within the neon circuits."
              </p>

              <form onSubmit={handleAsk} className="flex gap-2">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask about the world of Blood High!..."
                  className="bg-background border-2 border-primary/30 focus:border-primary rounded-none h-12 font-body"
                />
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 rounded-none h-12 px-6 font-headline"
                >
                  {loading ? <Zap className="animate-spin" /> : <Send />}
                </Button>
              </form>
            </div>
          </div>

          {answer && (
            <div className="p-8 bg-black/40 border-2 border-secondary/50 comic-panel animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-start gap-4">
                <Brain className="text-secondary shrink-0 w-6 h-6 mt-1" />
                <div className="flex-1">
                  <div className="font-headline text-secondary text-sm mb-2">ORACLE TRANSMISSION:</div>
                  <p className="text-foreground/90 font-body leading-relaxed whitespace-pre-wrap">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
