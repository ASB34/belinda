"use client"

import { motion } from 'framer-motion'
import { Leaf, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

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
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
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
