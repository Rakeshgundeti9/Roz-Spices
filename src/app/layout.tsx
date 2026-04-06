import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Roz Spices - India\'s Most Trusted Bulk Spice Supplier | FSSAI Certified',
  description:
    'Premium quality bulk spices for restaurants, distributors, and food businesses across India. FSSAI & ISO certified. 500+ happy clients. Red Chilli, Turmeric, Coriander, Garam Masala and more. Free sample kit available.',
  keywords: [
    'bulk spice supplier India',
    'wholesale spices',
    'red chilli powder bulk',
    'turmeric powder wholesale',
    'FSSAI certified spices',
    'Roz Spices',
    'restaurant spice supplier',
    'spice distributor India',
    'Telangana spices',
    'premium spices wholesale',
  ],
  authors: [{ name: 'Roz Spices Industries' }],
  creator: 'Roz Spices Industries',
  publisher: 'Roz Spices Industries',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rozspices.com',
    siteName: 'Roz Spices',
    title: 'Roz Spices - India\'s Most Trusted Bulk Spice Supplier',
    description:
      'Premium quality bulk spices for restaurants, distributors & food businesses. FSSAI & ISO certified. Serving 500+ businesses across India.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d',
        width: 1200,
        height: 630,
        alt: 'Roz Spices - Premium Indian Bulk Spices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roz Spices - India\'s Most Trusted Bulk Spice Supplier',
    description:
      'Premium quality bulk spices for restaurants, distributors & food businesses. FSSAI & ISO certified.',
    images: ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d'],
  },
  alternates: {
    canonical: 'https://rozspices.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
