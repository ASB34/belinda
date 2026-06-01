"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Droplet, Timer, Repeat } from 'lucide-react'

const steps = [
  {
    icon: Droplet,
    title: 'Islat',
    description: 'Saçlarınızı ılık suyla iyice ıslatın.',
  },
  {
    icon: Sparkles,
    title: 'Uygula',
    description: 'Şampuanı avuç içinize alın ve saç derisine masaj yaparak uygulayın.',
  },
  {
    icon: Timer,
    title: 'Bekle',
    description: 'Aktif bileşenlerin etkisi için 2-3 dakika bekleyin.',
  },
  {
    icon: Repeat,
    title: 'Durula',
    description: 'Bol suyla durulayın. Gerekirse işlemi tekrarlayın.',
  },
]

export function Ritual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Ritüel · Bakım
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Her yıkama,{' '}
              <span className="gradient-text">bir ritüel.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Saçınıza dokunan zengin köpük, at kuyruğu özünün doğal gücüyle bütünleşiyor. 
              Günlük bakımınız, Belinda ile premium bir deneyime dönüşüyor.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Visual */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Circles */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-8 rounded-full border-2 border-dashed border-accent/20"
              />

              {/* Center Content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <div className="text-6xl mb-2">🌿</div>
                  <p className="text-sm font-medium text-primary">At Kuyruğu Özü</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              {[
                { emoji: '💧', delay: 0, position: 'top-0 left-1/4' },
                { emoji: '✨', delay: 1, position: 'top-1/4 right-0' },
                { emoji: '🌱', delay: 2, position: 'bottom-1/4 left-0' },
                { emoji: '💫', delay: 3, position: 'bottom-0 right-1/4' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} text-3xl`}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
