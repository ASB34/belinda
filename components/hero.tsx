"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Leaf, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const floatingElements = [
  { icon: Leaf, delay: 0, x: '10%', y: '20%' },
  { icon: Sparkles, delay: 0.5, x: '85%', y: '30%' },
  { icon: Droplets, delay: 1, x: '15%', y: '70%' },
  { icon: Leaf, delay: 1.5, x: '80%', y: '75%' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 text-primary"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.2, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            delay: element.delay,
            duration: 0.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <element.icon className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Yeni · Doğal Bakım Serisi</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-balance">
              Saçınızın doğal{' '}
              <span className="relative inline-block">
                <span className="gradient-text">gücünü</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.path
                    d="M2 8 Q 50 2, 100 8 T 198 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-accent"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              {' '}keşfedin.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Belinda At Kuyruğu ve Black Pigment Şampuanları; sülfatsız, tuzsuz, 
            aminoasit destekli bitkisel formülleriyle saçınıza profesyonel 
            günlük bakım sunar.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Link href="#urunler">
                Ürünleri Keşfet
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5"
            >
              <Link href="#oncesi-sonrasi">
                Sonuçları Gör
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {[
              'SLS / SLES İçermez',
              'Tuzsuz',
              'Amino Acid Mixture',
              'Made in Türkiye'
            ].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
