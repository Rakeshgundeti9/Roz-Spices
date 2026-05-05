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
  'chilli-teekha': [
    {
      src: '/images/products/Chilli Teekha.png',
      alt: 'Roz Red Chilli Powder TEEKHA pouch',
    },
  ],
  '01': [
    {
      src: '/images/products/01.png',
      alt: '01 product',
    },
  ],
  '02': [
    {
      src: '/images/products/02.png',
      alt: '02 product',
    },
  ],
  '03': [
    {
      src: '/images/products/03.png',
      alt: '03 product',
    },
  ],
  '04': [
    {
      src: '/images/products/04.png',
      alt: '04 product',
    },
  ],
  '05': [
    {
      src: '/images/products/05.png',
      alt: '05 product',
    },
  ],
  '06': [
    {
      src: '/images/products/06.png',
      alt: '06 product',
    },
  ],
  '07': [
    {
      src: '/images/products/07.png',
      alt: '07 product',
    },
  ],
  '08': [
    {
      src: '/images/products/08.png',
      alt: '08 product',
    },
  ],
  '09': [
    {
      src: '/images/products/09.png',
      alt: '09 product',
    },
  ],
  '10': [
    {
      src: '/images/products/10.png',
      alt: '10 product',
    },
  ],
  '11': [
    {
      src: '/images/products/11.png',
      alt: '11 product',
    },
  ],
  '12': [
    {
      src: '/images/products/12.png',
      alt: '12 product',
    },
  ],
  '13': [
    {
      src: '/images/products/13.png',
      alt: '13 product',
    },
  ],
  '14': [
    {
      src: '/images/products/14.png',
      alt: '14 product',
    },
  ],
  '15': [
    {
      src: '/images/products/15.png',
      alt: '15 product',
    },
  ],
  '16': [
    {
      src: '/images/products/16.png',
      alt: '16 product',
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
      id: 'Teekha',
      name: 'Red Chilli Powder TEEKHA',
      tagline: 'King of Spices',
      images: productImages['chilli-teekha'],
      color: 'from-gray-700 to-gray-900',
      benefits: [
        'Strong pungent flavor',
        'High piperine content',
        'Freshly ground quality',
        'Versatile seasoning',
        'Premium grade pepper',
      ],
      description:
        'Finest quality Chilli Teekha with strong aroma and sharp taste. Perfect for seasoning and enhancing flavor profiles.',
    },
    {
      id: '01',
      name: '01',
      tagline: 'Essential Indian Spice',
      images: productImages['01'],
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
      id: '02',
      name: '02',
      tagline: 'Queen of Spices',
    images: productImages['02'],
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
      id: '03',
      name: '03',
      tagline: 'Powerful Aroma',
      images: productImages['03'],
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
      id: '04',
      name: '04',
      tagline: 'Sweet & Aromatic',
      images: productImages['04'],
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
      id: '05',
      name: '05',
      tagline: 'Healthy & Flavorful',
      images: productImages['05'],
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
      id: '06',
      name: '06',
      tagline: 'Pungent & Tangy',
      images: productImages['06'],
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
  

    {
      id: '07',
      name: '07',
      tagline: 'Exotic Flavor',
      images: productImages['07'],
      color: 'from-purple-600 to-pink-700',
      benefits: [
        'Unique exotic taste',
        'Perfect for special dishes',
        'Natural ingredients',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Exotic spice blend with unique flavors. Ideal for adventurous cooking and special recipes.',
    },
    {
      id: '08',
      name: '08',
      tagline: 'Spicy Delight',
      images: productImages['08'],
      color: 'from-red-700 to-orange-800',
      benefits: [
        'Intense spicy flavor',
        'Perfect for heat lovers',
        'Natural heat source',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Spicy delight with intense heat. Perfect for those who love bold and spicy flavors.',
    },
    {
      id: '09',
      name: '09',
      tagline: 'Mild Aroma',
      images: productImages['09'],
      color: 'from-green-700 to-blue-800',
      benefits: [
        'Mild aromatic flavor',
        'Perfect for delicate dishes',
        'Natural aroma',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Mild aroma spice with delicate flavors. Ideal for subtle and refined cooking.',
    },
    {
      id: '10',
      name: '10',
      tagline: 'Bold Essence',
      images: productImages['10'],
      color: 'from-yellow-600 to-red-700',
      benefits: [
        'Bold essential flavor',
        'Perfect for main dishes',
        'Natural essence',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Bold essence spice with strong flavors. Essential for hearty and flavorful meals.',
    },
    {
      id: '11',
      name: '11',
      tagline: 'Sweet Touch',
      images: productImages['11'],
      color: 'from-pink-600 to-purple-700',
      benefits: [
        'Sweet touch flavor',
        'Perfect for desserts',
        'Natural sweetness',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Sweet touch spice with natural sweetness. Ideal for desserts and sweet dishes.',
    },
    {
      id: '12',
      name: '12',
      tagline: 'Tangy Twist',
      images: productImages['12'],
      color: 'from-orange-600 to-yellow-700',
      benefits: [
        'Tangy twist flavor',
        'Perfect for pickles',
        'Natural tanginess',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Tangy twist spice with natural tang. Perfect for pickles and tangy recipes.',
    },
    {
      id: '13',
      name: '13',
      tagline: 'Herbal Fresh',
      images: productImages['13'],
      color: 'from-teal-600 to-green-700',
      benefits: [
        'Fresh herbal flavor',
        'Perfect for salads',
        'Natural herbs',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Fresh herbal spice with natural herbs. Ideal for salads and fresh dishes.',
    },
    {
      id: '14',
      name: '14',
      tagline: 'Smoky Sensation',
      images: productImages['14'],
      color: 'from-gray-600 to-black',
      benefits: [
        'Smoky sensation flavor',
        'Perfect for grilling',
        'Natural smokiness',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Smoky sensation spice with natural smoke. Perfect for grilling and smoky flavors.',
    },
    {
      id: '15',
      name: '15',
      tagline: 'Citrus Burst',
      images: productImages['15'],
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Citrus burst flavor',
        'Perfect for marinades',
        'Natural citrus',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Citrus burst spice with natural citrus notes. Ideal for marinades and fresh flavors.',
    },
    {
      id: '16',
      name: '16',
      tagline: 'Earthy Depth',
      images: productImages['16'],
      color: 'from-brown-600 to-yellow-700',
      benefits: [
        'Earthy depth flavor',
        'Perfect for stews',
        'Natural earthiness',
        'High quality',
        'Long shelf life',
      ],
      description:
        'Earthy depth spice with deep flavors. Perfect for stews and rich dishes.',
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