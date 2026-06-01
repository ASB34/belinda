"use client"

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'Belinda şampuanları her saç tipine uygun mu?',
    answer: 'Evet, Belinda şampuanları sülfatsız ve tuzsuz formülleri sayesinde yağlı, kuru, normal, boyalı ve işlem görmüş tüm saç tiplerine uygundur. Bitkisel içerikleri hassas saç derisinde bile güvenle kullanılabilir.',
  },
  {
    question: 'At Kuyruğu Şampuanı ne sıklıkla kullanılmalı?',
    answer: 'Günlük kullanıma uygundur. En iyi sonuçlar için haftada en az 3-4 kez kullanmanızı öneririz. Saç dökülmesi sorunu yaşıyorsanız, ilk 8 hafta düzenli kullanım önemlidir.',
  },
  {
    question: 'Black Pigment Şampuan saçları boyar mı?',
    answer: 'Hayır, Black Pigment Şampuan bir boya değildir. Siyah pigmentler saçı geçici olarak boyanmış gibi göstermez; bunun yerine saçın doğal melanin üretimini destekleyerek mevcut koyu tonları canlandırır ve parlaklık katar.',
  },
  {
    question: 'Sonuçları ne kadar sürede görebilirim?',
    answer: 'İlk kullanımda saçlarınızda parlaklık ve yumuşaklık farkı hissedebilirsiniz. Dökülme azalması ve güçlenme için 4-8 haftalık düzenli kullanım sonrası belirgin sonuçlar görülür.',
  },
  {
    question: 'Hamilelikte veya emzirme döneminde kullanılabilir mi?',
    answer: 'Belinda şampuanları %100 bitkisel ve zararlı kimyasallardan arındırılmış formüle sahiptir. Yine de hamilelik ve emzirme döneminde herhangi bir ürün kullanmadan önce doktorunuza danışmanızı öneririz.',
  },
  {
    question: 'Kargo ve teslimat ne kadar sürer?',
    answer: 'Siparişleriniz 1-3 iş günü içinde kargoya verilir. İstanbul içi teslimat genellikle 1-2 gün, diğer iller için 2-4 iş günü sürmektedir. 500 TL üzeri siparişlerde kargo ücretsizdir.',
  },
]

export function FAQ() {
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
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Merak ettikleriniz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ürünlerimiz hakkında en çok sorulan soruların cevapları.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Başka sorularınız mı var?{' '}
            <a href="#iletisim" className="text-primary font-medium hover:underline">
              Bize ulaşın
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
