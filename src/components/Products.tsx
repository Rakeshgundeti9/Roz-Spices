'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, PackageCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product, products } from '@/data/products'

const Products = () => {
  // const [slideIndex, setSlideIndex] = useState(0)
  // const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set())

  // useEffect(() => {
  //   const timer = window.setInterval(() => {
  //     setSlideIndex((current) => current + 1)
  //   }, 4500)

  //   return () => window.clearInterval(timer)
  // }, [])

  // const handleImageError = (src: string) => {
  //   setFailedImages((current) => {
  //     const next = new Set(current)
  //     next.add(src)
  //     return next
  //   })
  // }

  

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Product Range
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            100% Pure, Lab-Tested Spices for Your Business Success
          </p>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-testid="products-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <OtherProducts />

        {/* upcoming teaser */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-dashed border-orange-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 shadow-lg rounded-xl p-4 bg-white">
              <Image
                src='/images/Pickles.png'
                alt="Special Chilli Powder for Pickle"
                width={200}
                height={200}
                className="w-32 h-32 rounded-xl object-cover  transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                Coming Soon
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Special Chilli Powder for Pickles & Daily Use
        
              </h3>
              <p className="text-gray-600">
                Perfect blend specifically crafted for pickle manufacturers. Higher heat, vibrant color, extended shelf life.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Notified
            </Button>
          </div>
        </div>

        {/* bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '100%', label: 'Pure & Natural', color: 'text-red-600' },
            { value: 'Lab', label: 'Tested Quality', color: 'text-orange-600' },
            { value: '9+', label: 'Months Shelf Life', color: 'text-green-600' },
            { value: 'FSSAI', label: 'Certified', color: 'text-blue-600' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className={`text-3xl font-bold ${s.color} mb-2`}>{s.value}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── animation styles ── */}
      <style jsx global>{`
        @keyframes rozImgEnter {
          0%   { opacity: 0; transform: scale(0.96) translateY(10px); }
          100% { opacity: 1; transform: scale(1)    translateY(0px);  }
        }
        @keyframes rozImgLeave {
          0%   { opacity: 1; transform: scale(1)    translateY(0px);   }
          100% { opacity: 0; transform: scale(1.04) translateY(-8px);  }
        }
        @keyframes rozKenBurns {
          0%   { transform: scale(1)    translateY(0px);  }
          100% { transform: scale(1.06) translateY(-4px); }
        }

        .roz-img-enter {
          animation:
            rozImgEnter  600ms cubic-bezier(0.22, 1, 0.36, 1) both,
            rozKenBurns 4500ms ease-in-out              forwards;
          z-index: 2;
        }
        .roz-img-leave {
          animation: rozImgLeave 500ms cubic-bezier(0.4, 0, 1, 1) both;
          z-index: 1;
        }
      `}</style>
    </section>
  )
}

export default Products


/* ─── per-card image rotator hook ────────────────────── */
function useImageCycle(length: number, intervalMs = 4500) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (length <= 1) return
    const id = window.setInterval(() => {
      setIndex(i => (i + 1) % length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [length, intervalMs])

  return { index }
}
/* ─── single product card ────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(() => new Set())

  const available = product.images.filter(img => !failedSrcs.has(img.src))
  const { index } = useImageCycle(available.length)

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
      data-testid={`product-${product.id}`}
    >
      {/* ── image stage ── */}
      <div className="relative h-56 overflow-hidden bg-orange-50 group-hover:cursor-pointer">

        {available.length > 0 ? (
          available.map((img, i) => {

            return (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw,(max-width:1024px) 50vw, 25vw"
                className={[
                  'object-contain p-5 absolute inset-0',
                  'transition-opacity duration-700 ease-in-out',
                  'transition-transform duration-500 ease-out',
                  'group-hover:scale-105',
                  i === index ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                onError={() => setFailedSrcs(s => new Set(s).add(img.src))}
              />
            )
          })
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            Product image coming soon
          </div>
        )}

        {/* dot indicators */}
        {available.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {available.map((img, i) => (
              <span
                key={img.src}
                className={[
                  'block rounded-full transition-all duration-500',
                  i === index
                    ? 'w-4 h-2 bg-white shadow-sm'
                    : 'w-2 h-2 bg-white/50',
                ].join(' ')}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── content ── */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className={`text-sm font-semibold bg-gradient-to-r ${product.color} text-transparent bg-clip-text mb-4`}>
          {product.tagline}
        </p>
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">{product.description}</p>
        <div className="mb-5">
          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
          <ul className="space-y-2">
            {product.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const otherProducts = [
  { name: 'Whole Spices', description: 'Carefully sourced whole spices for everyday cooking, restaurants and bulk requirements.' },
  { name: 'Dry Fruits', description: 'Fresh, quality dry fruits selected for snacking, gifting and kitchen use.' },
  { name: 'Pulses', description: 'Kitchen staples with dependable quality and clean, consistent grains.' },
  { name: 'Cooking Essentials', description: 'More practical pantry products to complete your daily grocery needs.' },
]

function OtherProducts() {
  return (
    <section className="rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5" aria-labelledby="other-products-heading">
      <div className="relative aspect-[2684/1225] overflow-hidden bg-[radial-gradient(ellipse_at_top,_#d9e1e8_0%,_#eef1f4_36%,_#ffffff_76%)]">
        <Image
          src="/images/Whole spices.png"
          alt="Roz whole spices product collection"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="relative z-10 object-contain p-2 sm:p-4"
          priority={false}
        />
      </div>

      <div className="p-7 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-600">Other products</p>
        <h3 id="other-products-heading" className="mt-2 text-3xl font-bold text-gray-900">More to explore</h3>
        <p className="mt-3 text-gray-600">We are building a wider range of quality products for homes and food businesses.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherProducts.map((product) => (
            <div key={product.name} className="rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:border-emerald-200 hover:bg-emerald-50/50">
              <PackageCheck className="mb-3 h-5 w-5 text-emerald-700" />
              <h4 className="font-bold text-gray-900">{product.name}</h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
