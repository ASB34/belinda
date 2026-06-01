"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Öncesi', 
  afterLabel = 'Sonrası' 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      />

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <MoveHorizontal className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        {afterLabel}
      </div>
    </div>
  )
}

const testimonials = [
  {
    id: 1,
    name: 'Ayşe K.',
    duration: '6 Hafta Kullanım',
    product: 'At Kuyruğu Şampuan',
    quote: 'Saç dökülmem gözle görülür şekilde azaldı. Artık fırçamda çok daha az saç kalıyor.',
    beforeImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop&crop=top',
    afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop&crop=top',
  },
  {
    id: 2,
    name: 'Mehmet Y.',
    duration: '8 Hafta Kullanım',
    product: 'Black Pigment Şampuan',
    quote: 'Beyazlayan saçlarım artık çok daha canlı ve koyu görünüyor. Mükemmel sonuç!',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=top',
    afterImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=top',
  },
]

export function BeforeAfter() {
  return (
    <section id="oncesi-sonrasi" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Öncesi · Sonrası
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Belinda ile gerçek fark.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Düzenli kullanım sonrası saçlarınızdaki değişimi siz de görün. 
            Görselleri sürükleyerek öncesi ve sonrasını karşılaştırın.
          </p>
        </motion.div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-6"
            >
              <BeforeAfterSlider
                beforeImage={testimonial.beforeImage}
                afterImage={testimonial.afterImage}
              />
              
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-medium text-primary">{testimonial.product}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{testimonial.duration}</span>
                </div>
                <p className="text-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm font-medium">— {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground max-w-3xl mx-auto mt-12"
        >
          * Sonuçlar kişiden kişiye farklılık gösterebilir. Görseller temsilidir; 
          saç yapısı, kullanım sıklığı ve bakım alışkanlıklarına göre değişkenlik gösterir. 
          Tipik fark 4-8 haftalık düzenli kullanımdan sonra belirginleşir.
        </motion.p>
      </div>
    </section>
  )
}
