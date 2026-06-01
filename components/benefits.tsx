"use client"

import { motion } from 'framer-motion'
import { 
  Leaf, 
  Sparkles, 
  Shield, 
  Zap, 
  Heart, 
  Droplets,
  Sun,
  Wind,
  FlaskConical,
  Gem
} from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: 'Saç Tellerini Kalınlaştırır',
    description: 'Silika, keratin sentezini destekleyerek saç telinin çap ve yoğunluğunu artırır.',
    number: '01',
  },
  {
    icon: Shield,
    title: 'Dökülmeye Karşı Destek',
    description: 'Saç köklerini besler, kan dolaşımını destekler; mevsimsel ve stres kaynaklı dökülmeyi azaltır.',
    number: '02',
  },
  {
    icon: Sparkles,
    title: 'Doğal Parlaklık',
    description: 'Saç kütikülünü pürüzsüzleştirerek ışığı daha iyi yansıtmasını sağlar.',
    number: '03',
  },
  {
    icon: Zap,
    title: 'Kırılganlığı Önler',
    description: 'Esnekliği artırarak saçın kırılmasını ve uçların dökülmesini azaltır.',
    number: '04',
  },
  {
    icon: Heart,
    title: 'Saç Derisini Dengeler',
    description: 'Antioksidan ve yatıştırıcı özellikleriyle hassas saç derisinde ferahlık sağlar.',
    number: '05',
  },
  {
    icon: Droplets,
    title: 'Kepeğe Karşı Etkili',
    description: 'Antibakteriyel ve antifungal özellikleri kepek oluşumunu azaltmaya yardım eder.',
    number: '06',
  },
  {
    icon: Wind,
    title: 'Saç Büyümesini Hızlandırır',
    description: 'Silika + biotin kombinasyonu, folikül aktivitesini destekleyerek uzamaya katkı sağlar.',
    number: '07',
  },
  {
    icon: Sun,
    title: 'Erken Beyazlamaya Karşı',
    description: 'İçerdiği mineraller melanin üretimine destek olur; beyazlamayı geciktirmeye yardımcı olabilir.',
    number: '08',
  },
  {
    icon: FlaskConical,
    title: 'Kollajen Desteği',
    description: 'Silika, saç derisinde kollajen üretimini destekleyerek dokuyu güçlendirir.',
    number: '09',
  },
  {
    icon: Gem,
    title: 'Her Saç Tipi İçin Uygun',
    description: 'Doğal yapısı sayesinde boyalı, işlem görmüş, yağlı veya kuru her saç tipinde güvenle kullanılabilir.',
    number: '10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Benefits() {
  return (
    <section id="faydalar" className="py-24 bg-background">
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
            Bitkisel Güç · Equisetum Arvense
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            At kuyruğu bitkisinin{' '}
            <span className="gradient-text">10 önemli faydası</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            At kuyruğu (Equisetum arvense), milyonlarca yıldır var olan prehistorik bir bitkidir. 
            Saç için en değerli özelliği, içerdiği yüksek orandaki silika (silisyum dioksit) mineralidir.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.number}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Number Badge */}
              <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {benefit.number}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <benefit.icon className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Formula Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Belinda&apos;nın Formülü
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Belinda 1000 ml Şampuan; at kuyruğu özünü biotin, panthenol, niacinamide ve 
            4 aminoasitle zenginleştirilmiş bitkisel formülde sunar. Sülfatsız (SLS/SLES içermez) 
            ve tuzsuz yapısıyla bu değerli bileşenlerin saça tam olarak ulaşmasını sağlar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
