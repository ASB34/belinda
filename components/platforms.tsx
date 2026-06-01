"use client"

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const platforms = [
  {
    name: 'Trendyol',
    description: "Türkiye'nin en büyük e-ticaret platformu",
    logo: '🛒',
    status: 'Aktif',
    url: '#',
    color: 'from-orange-500/20 to-orange-600/10',
  },
  {
    name: 'Amazon',
    description: 'Amazon.com.tr üzerinden hızlı teslimat',
    logo: '📦',
    status: 'Aktif',
    url: '#',
    color: 'from-yellow-500/20 to-yellow-600/10',
  },
  {
    name: 'Hepsiburada',
    description: 'Güvenilir alışveriş deneyimi',
    logo: '🏪',
    status: 'Yakında',
    url: '#',
    color: 'from-orange-400/20 to-red-500/10',
  },
]

export function Platforms() {
  return (
    <section className="py-24 bg-secondary/30">
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
            Bizi Bulun
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tercih ettiğiniz platformdan sipariş edin.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Direkt sitemizden güvenli alışverişin yanı sıra popüler e-ticaret platformları 
            üzerinden de Belinda ürünlerine ulaşabilirsiniz.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${platform.color} hover:shadow-xl transition-all duration-500`}>
                <CardContent className="p-6 text-center">
                  {/* Logo */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl mb-4"
                  >
                    {platform.logo}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {platform.description}
                  </p>

                  {/* Status & Button */}
                  {platform.status === 'Aktif' ? (
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        Mağazaya Git
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline"
                      className="w-full opacity-50 cursor-not-allowed"
                      disabled
                    >
                      Yakında
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground max-w-3xl mx-auto mt-12"
        >
          Not: Pazaryerleri üzerinden yapılan alışverişlerde iade & değişim koşulları 
          ilgili platformun kendi kurallarına tabidir.
        </motion.p>
      </div>
    </section>
  )
}
