"use client"

import { motion } from 'framer-motion'
import { Leaf, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.825 9.825 0 016.988 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const footerLinks = {
  products: [
    { label: 'At Kuyruğu Şampuan', href: '#urunler' },
    { label: 'Black Pigment Şampuan', href: '#urunler' },
    { label: 'Tüm Ürünler', href: '#urunler' },
  ],
  company: [
    { label: 'Hakkımızda', href: '#' },
    { label: 'Blog', href: '#blog' },
    { label: 'İletişim', href: '#iletisim' },
    { label: 'SSS', href: '#' },
  ],
  legal: [
    { label: 'Gizlilik Politikası', href: '#' },
    { label: 'Kullanım Koşulları', href: '#' },
    { label: 'İade & Değişim', href: '#' },
    { label: 'KVKK', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/belindashampoo/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@Belindashampoo', label: 'Youtube' },
  { icon: WhatsappIcon, href: 'https://wa.me/905332797114', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer id="iletisim" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold">Belinda</span>
              </Link>

              <p className="text-background/70 mb-6 max-w-sm">
                Doğanın gücünü bilimin hassasiyetiyle birleştiren premium saç bakım markası. 
                Sülfatsız, tuzsuz, %100 bitkisel formüller.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-background/70">
                <a href="mailto:info@belinda.com.tr" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Mail className="w-4 h-4" />
                  info@belinda.com.tr
                </a>
                <a href="tel:+908501234567" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  0850 123 45 67
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  İstanbul, Türkiye
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-background/60">
            © 2024 Belinda. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-background/60">
            🇹🇷 Türkiye&apos;de üretilmiştir.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
