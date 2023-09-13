import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero/>
      <Services/>
    </main>
  )
}
