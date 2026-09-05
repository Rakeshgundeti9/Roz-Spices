export interface Product {
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

export const productImages: Record<string, ProductImage[]> = {
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
      src: '/images/Products/Red Chilli Powder 500g.png',
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
      src: '/images/Products/Turmeric Powder 500g.png',
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
      src: '/images/Products/Coriander Powder 500g.png',
      alt: 'Roz Coriander Powder 500g pouch',
    },
  ],
  'dry-chilli': [
    {
      src: '/images/Products/Dried Chilli 200g.png',
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
      src: '/images/Products/Ginger Garlic Paste 5kg.png',
      alt: 'Roz Ginger Garlic Paste 5kg pouch',
    },
  ],
  'chilli-teekha': [
    {
      src: '/images/Products/Chilli Teekha.png',
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

export const products: Product[] = [
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
        'Promising curcumin content',
        'Natural anti-inflammatory properties',
      
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
        'Vibrant Red Color',
        'Mild heat level',
        'Perfect for Biryani Dishes',
        'Natural food coloring',
        'Premium Guntur quality',
      ],
      description:
        'Authentic Guntur chillies known for its deep red color and mild heat. Ideal for dishes requiring vibrant color without excessive spiciness.',
    },
    {
      id: 'ginger-garlic',
      name: 'Ginger Garlic Paste',
      tagline: 'Fresh & Flavorful',
      images: productImages['ginger-garlic'],
      color: 'from-amber-600 to-orange-700',
      benefits: [
        'Boosts immunity.',
        'Reduces inflammation.',
        'Aids in digestion.',
        'Supports heart health.',
        'Acts as antioxidants.',
      ],
      description:
        'Ginger Garlic Paste made by crushing raw ginger and garlic cloves. It is commonly used in Indian culinary to add flavor to Veg and Non-Veg dishes.',
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
        'Best and Most economical Pack',
      ],
      description:
        'Finest quality Chilli Teekha with strong aroma and sharp taste. Specially designed for Biryani and fastfood centers.',
    },
  ]
// export const products: Product[] = [
//     {
//       id: 'red-chilli',
//       name: 'Red Chilli Powder',
//       tagline: '100% Pure Lal Mirch Powder',
//       images: productImages['red-chilli'],
//       color: 'from-red-600 to-rose-700',
//       benefits: [
//         'Consistent heat level in every batch',
//         'Rich, vibrant red color',
//         'FSSAI certified - No fillers',
//         'Perfect for restaurant kitchens',
//         '9+ months shelf life',
//       ],
//       description:
//         'Premium red chilli powder that gives your dishes the perfect color and heat. Lab-tested for purity with no artificial colors or additives.',
//     },
//     {
//       id: 'turmeric',
//       name: 'Turmeric Powder',
//       tagline: 'Golden Goodness',
//       images: productImages.turmeric,
//       color: 'from-yellow-500 to-orange-600',
//       benefits: [
//         'Bright golden-yellow color',
//         'Promising curcumin content',
//         'Natural anti-inflammatory properties',
      
//         'Premium quality standardized extracts',
//       ],
//       description:
//         'Premium turmeric powder with high curcumin content. Natural color and powerful properties make it essential for authentic Indian cuisine.',
//     },
//     {
//       id: 'coriander',
//       name: 'Coriander Powder',
//       tagline: 'Fresh Garden Aroma',
//       images: productImages.coriander,
//       color: 'from-green-600 to-emerald-700',
//       benefits: [
//         'Natural green-brown color',
//         'Authentic garden-fresh aroma',
//         'Finely ground consistency',
//         'Ideal for curries & gravies',
//         'Adds distinct curry flavor',
//       ],
//       description:
//         'A perfect blend of garden-fresh aroma and natural flavor. Widely used for authentic Indian curries with cooling properties.',
//     },
//     {
//       id: 'dry-chilli',
//       name: 'Dry Chilli',
//       tagline: 'Vibrant Color, Mild Heat',
//       images: productImages['dry-chilli'],
//       color: 'from-red-500 to-red-700',
//       benefits: [
//         'Vibrant Red Color',
//         'Mild heat level',
//         'Perfect for Biryani Dishes',
//         'Natural food coloring',
//         'Premium Guntur quality',
//       ],
//       description:
//         'Authentic Guntur chillies known for its deep red color and mild heat. Ideal for dishes requiring vibrant color without excessive spiciness.',
//     },
//     {
//       id: 'ginger-garlic',
//       name: 'Ginger Garlic Paste',
//       tagline: 'Fresh & Flavorful',
//       images: productImages['ginger-garlic'],
//       color: 'from-amber-600 to-orange-700',
//       benefits: [
//         'Boosts immunity.',
//         'Reduces inflammation.',
//         'Aids in digestion.',
//         'Supports heart health.',
//         'Acts as antioxidants.',
//       ],
//       description:
//         'Ginger Garlic Paste made by crushing raw ginger and garlic cloves. It is commonly used in Indian culinary to add flavor to Veg and Non-Veg dishes.',
//     },
//     {
//       id: 'Teekha',
//       name: 'Red Chilli Powder TEEKHA',
//       tagline: 'King of Spices',
//       images: productImages['chilli-teekha'],
//       color: 'from-gray-700 to-gray-900',
//       benefits: [
//         'Strong pungent flavor',
//         'High piperine content',
//         'Freshly ground quality',
//         'Versatile seasoning',
//         'Best and Most economical Pack',
//       ],
//       description:
//         'Finest quality Chilli Teekha with strong aroma and sharp taste. Specially designed for Biryani and fastfood centers.',
//     },
//     {
//       id: '01',
//       name: '01',
//       tagline: 'Essential Indian Spice',
//       images: productImages['01'],
//       color: 'from-yellow-700 to-amber-800',
//       benefits: [
//         'Earthy, warm flavor',
//         'Essential for tadka/tempering',
//         'Aids in digestion',
//         'Fine grinding consistency',
//         'Pure cumin seeds ground',
//       ],
//       description:
//         'High-quality cumin powder with distinctive earthy aroma. A staple in Indian cooking, perfect for dal, curries, and vegetables.',
//     },

//     {
//       id: '02',
//       name: '02',
//       tagline: 'Queen of Spices',
//     images: productImages['02'],
//       color: 'from-green-500 to-teal-600',
//       benefits: [
//         'Intense aromatic flavor',
//         'Perfect for biryanis & desserts',
//         'Freshly ground premium pods',
//         'Natural sweet aroma',
//         'High essential oil content',
//       ],
//       description:
//         'Premium cardamom powder from finest green pods. Adds exotic aroma to biryanis, desserts, and traditional beverages.',
//     },
//     {
//       id: '03',
//       name: '03',
//       tagline: 'Powerful Aroma',
//       images: productImages['03'],
//       color: 'from-amber-800 to-yellow-900',
//       benefits: [
//         'Strong distinctive flavor',
//         'Natural antimicrobial properties',
//         'Perfect for garam masala',
//         'Long shelf life',
//         'Premium quality cloves',
//       ],
//       description:
//         'Finest clove powder with intense aroma and flavor. Essential ingredient in spice blends and traditional Indian recipes.',
//     },
//     {
//       id: '04',
//       name: '04',
//       tagline: 'Sweet & Aromatic',
//       images: productImages['04'],
//       color: 'from-orange-600 to-red-700',
//       benefits: [
//         'Sweet warm flavor',
//         'Perfect for bakery & beverages',
//         'Natural antioxidants',
//         'Ceylon cinnamon quality',
//         'Finely ground texture',
//       ],
//       description:
//         'Premium cinnamon powder with sweet, warm notes. Ideal for both savory dishes and desserts, beverages, and baking.',
//     },
//     {
//       id: '05',
//       name: '05',
//       tagline: 'Healthy & Flavorful',
//       images: productImages['05'],
//       color: 'from-yellow-600 to-amber-700',
//       benefits: [
//         'Slightly bitter, nutty flavor',
//         'Health benefits for digestion',
//         'Perfect for pickles & curries',
//         'Natural yellow color',
//         'Premium methi seeds',
//       ],
//       description:
//         'Quality fenugreek powder with distinctive flavor. Widely used in Indian pickles, curries, and traditional dishes for taste and health.',
//     },
//     {
//       id: '06',
//       name: '06',
//       tagline: 'Pungent & Tangy',
//       images: productImages['06'],
//       color: 'from-yellow-500 to-yellow-700',
//       benefits: [
//         'Sharp, tangy flavor',
//         'Essential for South Indian cooking',
//         'Perfect for tempering',
//         'Natural preservative',
//         'Bright yellow color',
//       ],
//       description:
//         'Premium mustard powder with pungent flavor. Essential for South Indian cuisine, pickles, and tempering dishes.',
//     },
  

//     {
//       id: '07',
//       name: '07',
//       tagline: 'Exotic Flavor',
//       images: productImages['07'],
//       color: 'from-purple-600 to-pink-700',
//       benefits: [
//         'Unique exotic taste',
//         'Perfect for special dishes',
//         'Natural ingredients',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Exotic spice blend with unique flavors. Ideal for adventurous cooking and special recipes.',
//     },
//     {
//       id: '08',
//       name: '08',
//       tagline: 'Spicy Delight',
//       images: productImages['08'],
//       color: 'from-red-700 to-orange-800',
//       benefits: [
//         'Intense spicy flavor',
//         'Perfect for heat lovers',
//         'Natural heat source',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Spicy delight with intense heat. Perfect for those who love bold and spicy flavors.',
//     },
//     {
//       id: '09',
//       name: '09',
//       tagline: 'Mild Aroma',
//       images: productImages['09'],
//       color: 'from-green-700 to-blue-800',
//       benefits: [
//         'Mild aromatic flavor',
//         'Perfect for delicate dishes',
//         'Natural aroma',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Mild aroma spice with delicate flavors. Ideal for subtle and refined cooking.',
//     },
//     {
//       id: '10',
//       name: '10',
//       tagline: 'Bold Essence',
//       images: productImages['10'],
//       color: 'from-yellow-600 to-red-700',
//       benefits: [
//         'Bold essential flavor',
//         'Perfect for main dishes',
//         'Natural essence',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Bold essence spice with strong flavors. Essential for hearty and flavorful meals.',
//     },
//     {
//       id: '11',
//       name: '11',
//       tagline: 'Sweet Touch',
//       images: productImages['11'],
//       color: 'from-pink-600 to-purple-700',
//       benefits: [
//         'Sweet touch flavor',
//         'Perfect for desserts',
//         'Natural sweetness',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Sweet touch spice with natural sweetness. Ideal for desserts and sweet dishes.',
//     },
//     {
//       id: '12',
//       name: '12',
//       tagline: 'Tangy Twist',
//       images: productImages['12'],
//       color: 'from-orange-600 to-yellow-700',
//       benefits: [
//         'Tangy twist flavor',
//         'Perfect for pickles',
//         'Natural tanginess',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Tangy twist spice with natural tang. Perfect for pickles and tangy recipes.',
//     },
//     {
//       id: '13',
//       name: '13',
//       tagline: 'Herbal Fresh',
//       images: productImages['13'],
//       color: 'from-teal-600 to-green-700',
//       benefits: [
//         'Fresh herbal flavor',
//         'Perfect for salads',
//         'Natural herbs',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Fresh herbal spice with natural herbs. Ideal for salads and fresh dishes.',
//     },
//     {
//       id: '14',
//       name: '14',
//       tagline: 'Smoky Sensation',
//       images: productImages['14'],
//       color: 'from-gray-600 to-black',
//       benefits: [
//         'Smoky sensation flavor',
//         'Perfect for grilling',
//         'Natural smokiness',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Smoky sensation spice with natural smoke. Perfect for grilling and smoky flavors.',
//     },
//     {
//       id: '15',
//       name: '15',
//       tagline: 'Citrus Burst',
//       images: productImages['15'],
//       color: 'from-yellow-500 to-orange-600',
//       benefits: [
//         'Citrus burst flavor',
//         'Perfect for marinades',
//         'Natural citrus',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Citrus burst spice with natural citrus notes. Ideal for marinades and fresh flavors.',
//     },
//     {
//       id: '16',
//       name: '16',
//       tagline: 'Earthy Depth',
//       images: productImages['16'],
//       color: 'from-brown-600 to-yellow-700',
//       benefits: [
//         'Earthy depth flavor',
//         'Perfect for stews',
//         'Natural earthiness',
//         'High quality',
//         'Long shelf life',
//       ],
//       description:
//         'Earthy depth spice with deep flavors. Perfect for stews and rich dishes.',
//     },
//   ]
