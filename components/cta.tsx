"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-dashed border-primary-foreground/20"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-dashed border-primary-foreground/10"
      />
      
      {/* Floating Icons */}
      {[
        { x: '10%', y: '20%', delay: 0 },
        { x: '85%', y: '30%', delay: 0.5 },
        { x: '20%', y: '70%', delay: 1 },
        { x: '75%', y: '80%', delay: 1.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-foreground/10"
          style={{ left: pos.x, top: pos.y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            delay: pos.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Leaf className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-primary-foreground"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Özel Fırsat</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto">
            Saçlarınızın değişimini{' '}
            <span className="relative inline-block">
              bugün
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </span>
            {' '}başlatın.
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            İlk siparişinize özel %15 indirim fırsatını kaçırmayın. 
            Doğal güzellik için ilk adımı atın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg group"
            >
              <Link href="#urunler">
                Hemen Sipariş Ver
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-primary-foreground/60">
              Kod: <span className="font-mono font-bold">BELINDA15</span>
            </p>
          </div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/70"
          >
            <span className="flex items-center gap-2">
              ✓ Ücretsiz Kargo
            </span>
            <span className="flex items-center gap-2">
              ✓ 30 Gün İade Garantisi
            </span>
            <span className="flex items-center gap-2">
              ✓ Güvenli Ödeme
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
