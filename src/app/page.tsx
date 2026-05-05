'use client'

import { useEffect } from 'react'
import axios from 'axios'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Products from '@/components/Products'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const API = `${BACKEND_URL}/api`

export default function HomePage() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await axios.get(`${API}/`)
        console.log('API Connected:', response.data.message)
      } catch (error) {
        console.error('API Connection Error:', error)
      }
    }
    testConnection()
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '917569515541'
    const message = encodeURIComponent(
      'Hi sir! I am interested in your bulk spice products. Please provide more information.'
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero onGetSampleClick={handleWhatsAppClick} />

      {/* Products */}
      <Products />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
