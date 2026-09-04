'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, FileTerminal } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <a href="https://rozspices.com" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-md">
                <Image
                  src="/images/Bottom.png"
                  alt="Roz Spices Logo"
                  width={300}
                  height={90}
                  className="h-full w-auto max-w-[150px] sm:max-w-[200px] object-contain"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India&apos;s most trusted bulk spice supplier, serving 500+ businesses with 100%
              pure, FSSAI certified spices since years.
            </p>

            {/* Certifications */}
            <div className="flex gap-2 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold">
                FSSAI
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                ISO
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#home"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/#why-us"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/#quote"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >

                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Red Chilli Powder</li>
              <li className="text-gray-400 text-sm">Turmeric Powder</li>
              <li className="text-gray-400 text-sm">Coriander Powder</li>
              <li className="text-gray-400 text-sm">Dry Chilli</li>
              <li className="text-gray-400 text-sm">Ginger Garlic Paste</li>
              <li className="text-gray-400 text-sm">
                <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs">
                  Coming Soon More Products
                </span>
              </li>
              <li className="text-gray-400 text-sm font-bold">Special Chilli Powder For Pickels</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+917569515541"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500 group-hover:text-green-400" />
                <div>
                  <div className="text-sm font-semibold text-white">Call Us</div>
                  <div className="text-sm">+91 7569515541</div>
                </div>
              </a>
              <div
                className="flex items-start gap-3 text-gray-400 transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500 group-hover:text-red-400" />
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a
                    href="mailto:info@rozspices.com"
                    onClick={(event) => {
                      event.preventDefault()
                      window.location.assign('mailto:info@rozspices.com')
                    }}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    <div className="text-sm">info@rozspices.com</div>
                  </a>
                  <a
                    href="mailto:rozspices@gmail.com"
                    onClick={(event) => {
                      event.preventDefault()
                      window.location.assign('mailto:rozspices@gmail.com')
                    }}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    <div className="text-sm">rozspices@gmail.com</div>
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                <div>
                  <div className="text-sm font-semibold text-white">Location</div>
                  <a
                    href="https://maps.app.goo.gl/aCkBZKEUo7ZycdQh9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed hover:text-white transition-colors hover:underline"
                  >
                    ROZ SPICES INDUSTRIES
                    <br />
                    Ailapur Rd, Korutla,
                    <br />
                    Jagtial, Telangana 505330
                    <br />
                    <span className="text-blue-400 text-xs mt-1 inline-block">
                      📍 View on Google Maps
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/roz.spices#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://x.com/rozspices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-white font-black text-lg">X</span>
                </a>
                <a
                  href="https://www.instagram.com/rozspices?igsh=a3Q0eWs3MGluNGdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://in.linkedin.com/in/roz-spices-industries-107330409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              Copyright © 2026 Roz Spices Industries.  <a href="https://idm247.com/" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
              </a> | All Rights Reserved.
            </p>
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
