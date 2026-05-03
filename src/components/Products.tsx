'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Product {
  id: string
  name: string
  tagline: string
  images: ProductImage[]
  color: string
  benefits: string[]
  description: string
}

interface ProductImage {
  src: string
  alt: string
}

const productImages: Record<string, ProductImage[]> = {
  'red-chilli': [
    // {
    //   src: '/images/products/Red Chilli Powder 50g.png',
    //   alt: 'Roz Red Chilli Powder 50g pouch',
    // },
    // {
    //   src: '/images/products/Red Chilli Powder 100g.png',
    //   alt: 'Roz Red Chilli Powder 100g pouch',
    // },
    // {
    //   src: '/images/products/Red Chilli Powder 200g.png',
    //   alt: 'Roz Red Chilli Powder 200g pouch',
    // },
    {
      src: '/images/products/Red Chilli Powder 500g.png',
      alt: 'Roz Red Chilli Powder 500g pouch',
    },
  ],
  turmeric: [
    // {
    //   src: '/images/products/Turmeric Powder 50g.png',
    //   alt: 'Roz Turmeric Powder 50g pouch',
    // },
    // {
    //   src: '/images/products/Turmeric Powder 100g.png',
    //   alt: 'Roz Turmeric Powder 100g pouch',
    // },
    // {
    //   src: '/images/products/Turmeric Powder 200g.png',
    //   alt: 'Roz Turmeric Powder 200g pouch',
    // },
    {
      src: '/images/products/Turmeric Powder 500g.png',
      alt: 'Roz Turmeric Powder 500g pouch',
    },
  ],
  coriander: [
    // {
    //   src: '/images/products/Coriander Powder 50g.png',
    //   alt: 'Roz Coriander Powder 50g pouch',
    // },
    // {
    //   src: '/images/products/Coriander Powder 100g.png',
    //   alt: 'Roz Coriander Powder 100g pouch',
    // },
    // {
    //   src: '/images/products/Coriander Powder 200g.png',
    //   alt: 'Roz Coriander Powder 200g pouch',
    // },
    {
      src: '/images/products/Coriander Powder 500g.png',
      alt: 'Roz Coriander Powder 500g pouch',
    },
  ],
  'dry-chilli': [
    {
      src: '/images/products/Dried Chilli 200g.png',
      alt: 'Roz Dried Chilli pouch',
    },
  ],
  'ginger-garlic': [
    // {
    //   src: '/images/products/Ginger Garlic Paste 200g.png',
    //   alt: 'Roz Ginger Garlic Paste 200g pouch',
    // },
    // {
    //   src: '/images/products/Ginger Garlic Paste 500g.png',
    //   alt: 'Roz Ginger Garlic Paste 500g pouch',
    // },
    // {
    //   src: '/images/products/Ginger Garlic Paste 1kg.png',
    //   alt: 'Roz Ginger Garlic Paste 1kg pouch',
    // },
    {
      src: '/images/products/Ginger Garlic Paste 5kg.png',
      alt: 'Roz Ginger Garlic Paste 5kg pouch',
    },
  ],
}

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

  const products: Product[] = [
    {
      id: 'red-chilli',
      name: 'Red Chilli Powder',
      tagline: '100% Pure Lal Mirch Powder',
      images: productImages['red-chilli'],
      color: 'from-red-600 to-rose-700',
      benefits: [
        'Consistent heat level in every batch',
        'Rich, vibrant red color',
        'FSSAI certified - No fillers',
        'Perfect for restaurant kitchens',
        '9+ months shelf life',
      ],
      description:
        'Premium red chilli powder that gives your dishes the perfect color and heat. Lab-tested for purity with no artificial colors or additives.',
    },
    {
      id: 'turmeric',
      name: 'Turmeric Powder',
      tagline: 'Golden Goodness',
      images: productImages.turmeric,
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Bright golden-yellow color',
        'High curcumin content',
        'Natural anti-inflammatory properties',
        'Perfect for food & beverages',
        'Premium quality standardized extracts',
      ],
      description:
        'Premium turmeric powder with high curcumin content. Natural color and powerful properties make it essential for authentic Indian cuisine.',
    },
    {
      id: 'coriander',
      name: 'Coriander Powder',
      tagline: 'Fresh Garden Aroma',
      images: productImages.coriander,
      color: 'from-green-600 to-emerald-700',
      benefits: [
        'Natural green-brown color',
        'Authentic garden-fresh aroma',
        'Finely ground consistency',
        'Ideal for curries & gravies',
        'Adds distinct curry flavor',
      ],
      description:
        'A perfect blend of garden-fresh aroma and natural flavor. Widely used for authentic Indian curries with cooling properties.',
    },
    {
      id: 'dry-chilli',
      name: 'Dry Chilli',
      tagline: 'Vibrant Color, Mild Heat',
      images: productImages['dry-chilli'],
      color: 'from-red-500 to-red-700',
      benefits: [
        'Brilliant red color',
        'Mild heat level',
        'Perfect for tandoori dishes',
        'Natural food coloring',
        'Premium Kashmiri quality',
      ],
      description:
        'Authentic Kashmiri chilli powder known for its deep red color and mild heat. Ideal for dishes requiring vibrant color without excessive spiciness.',
    },
    {
      id: 'ginger-garlic',
      name: 'Ginger Garlic Paste',
      tagline: 'Fresh & Flavorful',
      images: productImages['ginger-garlic'],
      color: 'from-amber-600 to-orange-700',
      benefits: [
        'Perfect blend of premium spices',
        'Aromatic and flavorful',
        'Enhances curry dishes instantly',
        'Consistent taste profile',
        'Ready-to-use blend',
      ],
      description:
        'Traditional Indian spice blend combining cardamom, cinnamon, cloves, and more. Essential for authentic North Indian cuisine.',
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper Powder',
      tagline: 'King of Spices',
      images: [],
      color: 'from-gray-700 to-gray-900',
      benefits: [
        'Strong pungent flavor',
        'High piperine content',
        'Freshly ground quality',
        'Versatile seasoning',
        'Premium grade pepper',
      ],
      description:
        'Finest quality black pepper powder with strong aroma and sharp taste. Perfect for seasoning and enhancing flavor profiles.',
    },
    {
      id: 'cumin',
      name: 'Cumin Powder (Jeera)',
      tagline: 'Essential Indian Spice',
      images: [],
      color: 'from-yellow-700 to-amber-800',
      benefits: [
        'Earthy, warm flavor',
        'Essential for tadka/tempering',
        'Aids in digestion',
        'Fine grinding consistency',
        'Pure cumin seeds ground',
      ],
      description:
        'High-quality cumin powder with distinctive earthy aroma. A staple in Indian cooking, perfect for dal, curries, and vegetables.',
    },

    {
      id: 'cardamom',
      name: 'Cardamom Powder',
      tagline: 'Queen of Spices',
      images: [],
      color: 'from-green-500 to-teal-600',
      benefits: [
        'Intense aromatic flavor',
        'Perfect for biryanis & desserts',
        'Freshly ground premium pods',
        'Natural sweet aroma',
        'High essential oil content',
      ],
      description:
        'Premium cardamom powder from finest green pods. Adds exotic aroma to biryanis, desserts, and traditional beverages.',
    },
    {
      id: 'clove',
      name: 'Clove Powder',
      tagline: 'Powerful Aroma',
      images: [],
      color: 'from-amber-800 to-yellow-900',
      benefits: [
        'Strong distinctive flavor',
        'Natural antimicrobial properties',
        'Perfect for garam masala',
        'Long shelf life',
        'Premium quality cloves',
      ],
      description:
        'Finest clove powder with intense aroma and flavor. Essential ingredient in spice blends and traditional Indian recipes.',
    },
    {
      id: 'cinnamon',
      name: 'Cinnamon Powder',
      tagline: 'Sweet & Aromatic',
      images: [],
      color: 'from-orange-600 to-red-700',
      benefits: [
        'Sweet warm flavor',
        'Perfect for bakery & beverages',
        'Natural antioxidants',
        'Ceylon cinnamon quality',
        'Finely ground texture',
      ],
      description:
        'Premium cinnamon powder with sweet, warm notes. Ideal for both savory dishes and desserts, beverages, and baking.',
    },
    {
      id: 'fenugreek',
      name: 'Fenugreek Powder (Methi)',
      tagline: 'Healthy & Flavorful',
      images: [],
      color: 'from-yellow-600 to-amber-700',
      benefits: [
        'Slightly bitter, nutty flavor',
        'Health benefits for digestion',
        'Perfect for pickles & curries',
        'Natural yellow color',
        'Premium methi seeds',
      ],
      description:
        'Quality fenugreek powder with distinctive flavor. Widely used in Indian pickles, curries, and traditional dishes for taste and health.',
    },
    {
      id: 'mustard',
      name: 'Mustard Powder',
      tagline: 'Pungent & Tangy',
      images: [],
      color: 'from-yellow-500 to-yellow-700',
      benefits: [
        'Sharp, tangy flavor',
        'Essential for South Indian cooking',
        'Perfect for tempering',
        'Natural preservative',
        'Bright yellow color',
      ],
      description:
        'Premium mustard powder with pungent flavor. Essential for South Indian cuisine, pickles, and tempering dishes.',
    },
  ]

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

        {/* upcoming teaser */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-dashed border-orange-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1656497119922-068c6a5e1193"
                alt="Coming Soon"
                width={128}
                height={128}
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                Coming Soon
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Special Chilli Powder for Pickle
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
      <div className="relative h-56 overflow-hidden bg-orange-50">

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