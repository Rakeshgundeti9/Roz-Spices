import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'


const Testimonials = () => {
  

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it – hear from businesses who trust us daily
          </p>

          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="border-l-2 border-gray-300 pl-3">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">500+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              data-testid={`testimonial-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-red-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* Avatar */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-400 p-1"
                  unoptimized
                />

                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {testimonial.highlight}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-center text-xl font-bold text-gray-900 mb-8">
            Trusted by Leading Businesses
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: 'AA Agencies', logo: 'MandiKing Logo' },
              { name: 'Peacock Restaurant', logo: 'Peacock Restarant logo' },
              { name: 'ANS Distributors', logo: 'Royal Bawarchi Logo' },
              { name: 'Best Bawarchi', logo: 'Bawarchi Biryani Logo' },
              { name: 'Spicy Kitchen', logo: 'spicy kitchen' },
              { name: 'R.R. Traders and Distributers', color: 'from-red-600 to-red-800' },
              { name: 'Jyothi Traders', color: 'from-green-500 to-green-600' },
            ].map((client, index) => (
              <div
                key={index}
                className="flex h-20 w-[calc(50%-1rem)] items-center justify-center md:w-[calc(20%-1.6rem)]"
              >
                {client.logo ? (
                  <Image
                    src={`/images/${client.logo}.png`}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div
                    className={`bg-gradient-to-r ${client.color} text-white px-6 py-3 rounded-lg font-bold text-center text-sm shadow-md hover:shadow-lg transition-shadow`}
                  >
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-sm text-gray-700 font-medium">Customer Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">3-5</div>
            <div className="text-sm text-gray-700 font-medium">Days Average Delivery Time</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-700 font-medium">Active Business Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
