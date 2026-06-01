"use client"

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Zeynep A.',
    location: 'İstanbul',
    avatar: '👩',
    rating: 5,
    product: 'At Kuyruğu Şampuan',
    text: '3 aydır kullanıyorum, saç dökülmem belirgin şekilde azaldı. Artık her taraklamadan sonra saç yığını görmüyorum!',
  },
  {
    id: 2,
    name: 'Ahmet K.',
    location: 'Ankara',
    avatar: '👨',
    rating: 5,
    product: 'Black Pigment Şampuan',
    text: 'Beyazlayan saçlarım için mükemmel bir çözüm. Doğal görünümü korurken saçlarım çok daha canlı duruyor.',
  },
  {
    id: 3,
    name: 'Selin M.',
    location: 'İzmir',
    avatar: '👩‍🦰',
    rating: 5,
    product: 'At Kuyruğu Şampuan',
    text: 'Boyalı saçlarım için sülfatsız bir şampuan arıyordum. Belinda tam aradığım gibi, rengimi korurken saçlarımı da besliyor.',
  },
  {
    id: 4,
    name: 'Murat Y.',
    location: 'Bursa',
    avatar: '👨‍🦱',
    rating: 5,
    product: 'Black Pigment Şampuan',
    text: 'İlk kullanımda bile fark ettim, saçlarım çok daha parlak ve dolgun görünüyor. Kesinlikle tavsiye ederim!',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
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
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Kullanıcılarımız ne diyor?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Binlerce mutlu müşterimizin deneyimlerini okuyun.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>

                  {/* Product Badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-primary font-medium">
                      {testimonial.product}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
