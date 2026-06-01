import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Stats } from '@/components/stats'
import { BeforeAfter } from '@/components/before-after'
import { Benefits } from '@/components/benefits'
import { Ritual } from '@/components/ritual'
import { Testimonials } from '@/components/testimonials'
import { Blog } from '@/components/blog'
import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Platforms } from '@/components/platforms'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Stats />
      <BeforeAfter />
      <Benefits />
      <Ritual />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Platforms />
      <Footer />
    </main>
  )
}
