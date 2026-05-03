'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Shield, Award, CheckCircle2 } from 'lucide-react'

interface HeroProps {
  onGetSampleClick: () => void
}

const Hero = ({ onGetSampleClick }: HeroProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden border-4 border-[#008885] p-2 bg-red-600/10">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/factory-image.jpg"
              alt="Roz Spices Manufacturing Facility"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-red-50/70 to-transparent" /> */}
          </div>
        </div>
      </div>

      {/* ── Background Blobs ── */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left" data-testid="hero-content">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <Shield className="text-green-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">100% Pure & Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              India&apos;s Most Trusted
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Bulk Spice Supplier
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Premium quality spices for HoReCa, Distributors and Retailers in the food stream across
              India & Abroad.{' '}
              <span className="font-semibold text-red-600">Trusted by 500+ businesses</span> for
              consistent quality and Services.
            </p>

            {/* Trust Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                <span className="text-sm font-semibold text-gray-700">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                <span className="text-sm font-semibold text-gray-700">Lab Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                <span className="text-sm font-semibold text-gray-700">Pan-India Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onGetSampleClick}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                data-testid="hero-free-sample-btn"
              >
                Get Sample Kit
              </Button>
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-6"
                data-testid="hero-view-products-btn"
              >
                View Products
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-orange-400 border-2 border-white flex items-center justify-center"
                  >
                    <Award className="text-white" size={20} />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">Rated 4.9/5 by 500+ Customers</p>
              </div>
            </div>
          </div>

          {/* Right — Spice Product Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
                alt="Premium Indian Spices"
                width={800}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">500+</div>
                    <div className="text-xs text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">15+</div>
                    <div className="text-xs text-gray-600">States Covered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-xs text-gray-600">Pure Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
