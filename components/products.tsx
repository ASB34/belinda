"use client"

import { motion } from 'framer-motion'
import { Leaf, Droplets, Sparkles, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const products = [
  {
    id: 'at-kuyrugu',
    name: 'At Kuyruğu Bitki Özlü Şampuan',
    subtitle: 'Güçlendirici Formül',
    description: 'Silika ve biotin açısından zengin at kuyruğu özü ile saç tellerini kökten uca güçlendirir. Dökülmeye karşı etkili, saç derisini ferahlatır.',
    price: '899',
    volume: '1000 ml',
    color: 'primary',
    gradient: 'from-primary/20 via-primary/10 to-transparent',
    icon: Leaf,
    features: [
      'At Kuyruğu (Silika) Özü',
      'Biotin + Panthenol',
      'Aminoasit Karışımı',
      'Keratin Desteği',
    ],
    badges: ['SLS/SLES İçermez', 'Tuzsuz', 'Vegan'],
    rating: 4.8,
    reviews: 2847,
  },
  {
    id: 'black-pigment',
    name: 'Black Pigment Şampuan',
    subtitle: 'Renk Koruma Formülü',
    description: 'Siyah pigmentlerle zenginleştirilmiş özel formül, koyu tonlu saçların canlılığını korur. Erken beyazlamayı geciktirir, saçlara derinlik katar.',
    price: '949',
    volume: '1000 ml',
    color: 'pigment',
    gradient: 'from-[#1a1a2e]/20 via-[#1a1a2e]/10 to-transparent',
    icon: Droplets,
    features: [
      'Aktif Siyah Pigment',
      'Melanin Desteği',
      'Renk Koruyucu Aktifler',
      'Parlaklık Serumu',
    ],
    badges: ['SLS/SLES İçermez', 'Tuzsuz', 'Renk Koruma'],
    rating: 4.9,
    reviews: 1923,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Products() {
  return (
    <section id="urunler" className="py-24 bg-gradient-to-b from-background to-secondary/30">
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
            Premium Koleksiyon
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Saç Bakım Serisi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Doğanın gücünü bilimin hassasiyetiyle birleştiren formüllerimizi keşfedin.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${product.gradient} backdrop-blur-sm`}>
                <CardContent className="p-8">
                  {/* Product Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-16 h-16 rounded-2xl ${product.color === 'pigment' ? 'bg-[#1a1a2e]' : 'bg-primary'} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground">{product.subtitle}</span>
                      <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString('tr-TR')} değerlendirme)</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className={`w-4 h-4 ${product.color === 'pigment' ? 'text-[#1a1a2e]' : 'text-primary'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {product.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs px-3 py-1 rounded-full bg-background/80 text-foreground/80"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <div>
                        <span className="text-3xl font-bold">₺{product.price}</span>
                        <span className="text-sm text-muted-foreground ml-2">/ {product.volume}</span>
                      </div>
                      <Button 
                        className={`${product.color === 'pigment' ? 'bg-[#1a1a2e] hover:bg-[#1a1a2e]/90' : 'bg-primary hover:bg-primary/90'} text-white`}
                      >
                        Sepete Ekle
                      </Button>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-10"
                    style={{ 
                      background: product.color === 'pigment' 
                        ? 'radial-gradient(circle, #1a1a2e 0%, transparent 70%)' 
                        : 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' 
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card px-6 py-3 rounded-full shadow-sm">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm">Tüm siparişlerde ücretsiz kargo</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
