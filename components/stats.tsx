"use client"

import { motion, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

function Counter({ target, suffix = '', prefix = '', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.floor(value))
        }
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString('tr-TR')}{suffix}
    </span>
  )
}

const stats = [
  {
    value: 50000,
    suffix: '+',
    label: 'Mutlu Müşteri',
    description: 'Türkiye genelinde',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Memnuniyet Oranı',
    description: 'Kullanıcı değerlendirmelerine göre',
  },
  {
    value: 4.8,
    suffix: '/5',
    label: 'Ortalama Puan',
    description: 'Tüm platformlarda',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Bitkisel İçerik',
    description: 'Doğal formül',
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter 
                  target={stat.value} 
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
