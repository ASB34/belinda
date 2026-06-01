"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const blogPosts = [
  {
    id: 1,
    title: 'At Kuyruğu Bitkisinin Saça 10 Muhteşem Faydası: Silika ve Biotin Gücü',
    excerpt: 'Equisetum arvense olarak bilinen at kuyruğu bitkisi, silika ve biotin açısından zengin yapısıyla saçlarınızı kökten uca güçlendirir.',
    tag: 'At Kuyruğu',
    readTime: '5 dk',
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Siyah Pigment Nedir? Koyu Saçların Sırrı ve Melanin Desteği',
    excerpt: 'Black Pigment teknolojisi ile saçlarınızın doğal koyu tonunu koruyun. Erken beyazlamaya karşı etkili formül.',
    tag: 'Black Pigment',
    readTime: '4 dk',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Biotin: Saç Bakımında Mucize Vitamin ve Doğal Çözümler',
    excerpt: 'Saç bakımında biotinin gücünü keşfedin. Doğal içeriklerle güçlendirilmiş saç bakım rutininizde biotin nasıl bir fark yaratıyor.',
    tag: 'Biotin',
    readTime: '6 dk',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-background">
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
            Belinda Günlüğü
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Saç bakımı, derinlemesine.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Saç bakımı hakkında bilmeniz gereken her şey, uzman önerileri ve doğal formüllerin arkasındaki bilim.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href="#" className="group block">
                <Card className="overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    
                    {/* Tag */}
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime} okuma
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
