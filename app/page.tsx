import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import FloatingCTA from '@/components/ui/FloatingCTA'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Facilities from '@/components/sections/Facilities'
import Flow from '@/components/sections/Flow'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Facilities />
        <Flow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
