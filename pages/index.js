import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeImage, setActiveImage] = useState(null)

  const cupcakeGallery = [
    { id: 1, name: "Rose Garden", description: "Buttercream roses on vanilla cupcake" },
    { id: 2, name: "Lavender Dream", description: "Purple flower design with lavender flavor" },
    { id: 3, name: "Cherry Blossom", description: "Pink sakura-inspired buttercream design" },
    { id: 4, name: "Wildflower", description: "Multi-colored buttercream flower arrangement" },
    { id: 5, name: "Sunflower Delight", description: "Bright yellow sunflower-shaped frosting" },
    { id: 6, name: "Daisy Fields", description: "White daisy design on lemon cupcake" },
  ]

  return (
    <>
      <Head>
        <title>Fior Finti Cupcakes</title>
        <meta name="description" content="Handcrafted floral cupcakes that transform every celebration into an elegant garden party. Made with love in every petal." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-3xl font-serif text-rose-900">Fior Finti</div>
            <div className="flex gap-8 text-sm tracking-wide text-gray-800 font-medium">
              <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
              <a href="#gallery" className="hover:text-rose-600 transition-colors">Gallery</a>
              <a href="#faq" className="hover:text-rose-600 transition-colors">FAQ</a>
              <a href="#order" className="hover:text-rose-600 transition-colors">Order</a>
              <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 animate-float">
              <div className="text-6xl">🌸</div>
            </div>
            <h1 className="text-7xl md:text-8xl font-serif font-light text-rose-900 mb-6 animate-fadeIn">
              Fior Finti
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic text-rose-800 mb-4 animate-fadeIn animation-delay-200">
              Where Every Cupcake Blooms
            </p>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-12 animate-fadeIn animation-delay-400">
              Cupcakes beautifully designed to look like flowers. Made to order by Lilit, a certified food handler and cupcake artist.
              Each creation is an edible work of art, made with the finest ingredients and decorated with stunning floral designs.
            </p>
            <a 
              href="#order" 
              className="inline-block px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all hover:scale-105 shadow-lg animate-fadeIn animation-delay-600"
            >
              Order Your Blooms
            </a>
          </div>
        </section>

        <div className="flex justify-center items-center gap-4 py-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-rose-300"></div>
          <div className="text-2xl">✿</div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>

        <section id="about" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-serif text-rose-900">Meet Lilit</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Hi! I'm Lilit, a cupcake artist based in Hollywood, CA. Fior Finti, meaning "artificial flowers" 
                  in Italian, is all about creating cupcakes that look like beautiful flowers. Each cupcake is 
                  carefully designed and decorated to resemble delicate blooms.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  As a certified food handler, I take pride in creating beautiful cupcakes that are not only stunning 
                  to look at but delicious to eat. Every order is made fresh to order, ensuring you receive 
                  the best for your special moments.
                </p>
                <div className="flex gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-serif text-rose-600">100+</div>
                    <div className="text-sm text-gray-800 font-medium">Floral Designs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-rose-600">500+</div>
                    <div className="text-sm text-gray-800 font-medium">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif text-rose-600">5★</div>
                    <div className="text-sm text-gray-800 font-medium">Reviews</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-20 absolute inset-0 blur-3xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
                  <div className="text-6xl mb-4">🧁</div>
                  <h3 className="text-2xl font-serif text-rose-900 mb-3">What Makes Us Special</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">✓</span>
                      <span>All-natural, quality ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">✓</span>
                      <span>Buttercream designed to look like flowers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">✓</span>
                      <span>Custom designs for any occasion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 mt-1">✓</span>
                      <span>Made fresh to order</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 px-6 bg-white/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-serif text-rose-900 mb-4">Our Garden</h2>
              <p className="text-lg text-gray-800">A selection of our most beloved cupcake designs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cupcakeGallery.map((item, index) => (
                <div 
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 flex items-center justify-center">
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {['🌹', '💜', '🌸', '🌼', '🌻', '🌺'][index]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-rose-900 mb-2">{item.name}</h3>
                    <p className="text-gray-800">{item.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-6 bg-white/60 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-serif text-rose-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-800">Everything you need to know about ordering</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">How far in advance should I order?</h3>
                <p className="text-gray-800">
                  For best results, please order at least 3-5 days in advance. For large orders (24+ cupcakes) or 
                  special events, we recommend 1-2 weeks notice to ensure availability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">What flavors do you offer?</h3>
                <p className="text-gray-800 mb-3">
                  Our signature flavors include:
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Classic Vanilla</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Rich Chocolate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Red Velvet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Lemon Zest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Strawberry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500">•</span>
                    <span>Lavender Vanilla</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mt-3">Custom flavors available upon request!</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">Do you deliver?</h3>
                <p className="text-gray-800">
                  Yes! We offer delivery throughout the Hollywood and greater Los Angeles area. Delivery fees vary 
                  based on distance. Pickup is also available from our Hollywood location.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">What is the minimum order?</h3>
                <p className="text-gray-800">
                  Our minimum order is 6 cupcakes. We offer packages of 6, 12, 24, or custom quantities for larger events.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">Can I customize the floral designs?</h3>
                <p className="text-gray-800">
                  Absolutely! Each order is custom-made. Let me know your color preferences, flower types, or event 
                  theme, and I'll create something beautiful just for you.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-serif text-rose-900 mb-3">Do you accommodate dietary restrictions?</h3>
                <p className="text-gray-800">
                  Please let me know about any allergies or dietary needs when you order. While my standard recipes 
                  contain common allergens (eggs, dairy, gluten), I'm happy to discuss options for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 border border-pink-100">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-serif text-rose-900 mb-4">Order Your Blooms</h2>
              <p className="text-lg text-gray-800">Let us create something beautiful for your special occasion</p>
            </div>
            <form action="https://formsubmit.co/fiorifinticupcakes@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Cupcake Order from FiorFinti.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Your Name *</label>
                  <input 
                    type="text"
                    name="name"
                    required 
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="(323) 303-4851"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Event Date *</label>
                  <input 
                    type="date"
                    name="event_date"
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Quantity *</label>
                  <select name="quantity" required className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select quantity</option>
                    <option value="6">6 cupcakes</option>
                    <option value="12">12 cupcakes</option>
                    <option value="24">24 cupcakes</option>
                    <option value="custom">Custom amount</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Delivery or Pickup *</label>
                  <select name="delivery_method" required className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select option</option>
                    <option value="delivery">Delivery</option>
                    <option value="pickup">Pickup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Delivery Address (if applicable)</label>
                  <input 
                    type="text"
                    name="delivery_address"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="123 Main St, Los Angeles, CA"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Occasion & Special Requests *</label>
                <textarea 
                  rows="4"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your celebration and any specific floral preferences..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all hover:scale-105 shadow-lg text-lg font-medium"
              >
                Submit Order Request
              </button>
              <p className="text-sm text-gray-500 text-center">We'll respond within 24 hours to confirm your order details</p>
            </form>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-serif text-rose-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-800 mb-8">
              For inquiries, please DM on Instagram or text me directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://www.instagram.com/fiori.finti.cupcakes/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                DM on Instagram
              </a>
              <a 
                href="sms:3233034851"
                className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text: (323) 303-4851
              </a>
            </div>
            <div className="mt-12 pt-12 border-t border-rose-300">
              <p className="text-gray-700">📧 <a href="mailto:fiorifinticupcakes@gmail.com" className="hover:text-rose-600 transition-colors">fiorifinticupcakes@gmail.com</a></p>
              <p className="text-gray-700 mt-2">📱 <a href="tel:3233034851" className="hover:text-rose-600 transition-colors">323.303.4851</a></p>
              <p className="text-gray-700 mt-2">📍 Hollywood, CA</p>
              <p className="text-sm text-gray-500 mt-4">✓ Certified Food Handler</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-pink-100">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-serif text-rose-900 mb-4">Payment Methods</h3>
                <p className="text-gray-800 mb-4">
                  We make it easy to pay for your beautiful cupcakes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</div>
                    <span className="text-gray-800">Venmo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</div>
                    <span className="text-gray-800">Zelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</div>
                    <span className="text-gray-800">Cash</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">✓</div>
                    <span className="text-gray-800">Credit/Debit Cards</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-4 pt-4 border-t border-pink-100">
                  A 50% deposit is required to confirm your order. The remaining balance is due upon delivery or pickup.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-pink-100">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-serif text-rose-900 mb-4">Cancellation Policy</h3>
                <div className="space-y-4 text-gray-800">
                  <div>
                    <h4 className="font-medium text-rose-900 mb-2">More than 48 hours before event:</h4>
                    <p className="text-sm">Full refund of deposit minus a $25 processing fee</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-2">24-48 hours before event:</h4>
                    <p className="text-sm">50% refund of deposit</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-900 mb-2">Less than 24 hours:</h4>
                    <p className="text-sm">No refund (ingredients purchased and prep started)</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Note:</strong> I understand that plans change! Please contact me as soon as possible 
                    if you need to modify or cancel your order.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-2xl font-serif text-rose-900 mb-4">Important Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-800">
                <div>
                  <h4 className="font-medium text-rose-900 mb-2">Storage & Shelf Life</h4>
                  <p className="text-sm">
                    Cupcakes are best enjoyed within 2-3 days. Store in an airtight container at room temperature 
                    or refrigerate for up to 5 days. Bring to room temperature before serving for best flavor.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-rose-900 mb-2">Order Changes</h4>
                  <p className="text-sm">
                    Changes to quantity, flavor, or design can be made up to 48 hours before your event. 
                    After this time, modifications may not be possible.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-rose-900 mb-2">Weather & Delivery</h4>
                  <p className="text-sm">
                    Buttercream is sensitive to heat. In warm weather, cupcakes will be delivered in insulated 
                    packaging. Please refrigerate immediately upon receipt.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-rose-900 mb-2">Contact for Issues</h4>
                  <p className="text-sm">
                    If you're not completely satisfied with your order, please contact me within 24 hours. 
                    Your happiness is my priority!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-rose-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="text-4xl font-serif mb-4">Fior Finti</div>
                <p className="text-rose-200 mb-2">Lilit | Cupcake Artist</p>
                <p className="text-rose-200">Cupcakes designed to look like beautiful flowers</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-rose-200 hover:text-white transition-colors">About</a>
                  <a href="#gallery" className="block text-rose-200 hover:text-white transition-colors">Gallery</a>
                  <a href="#faq" className="block text-rose-200 hover:text-white transition-colors">FAQ</a>
                  <a href="#order" className="block text-rose-200 hover:text-white transition-colors">Order</a>
                  <a href="#contact" className="block text-rose-200 hover:text-white transition-colors">Contact</a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Get In Touch</h4>
                <div className="space-y-2 text-rose-200">
                  <p>📧 <a href="mailto:fiorifinticupcakes@gmail.com" className="hover:text-white transition-colors">fiorifinticupcakes@gmail.com</a></p>
                  <p>📱 <a href="tel:3233034851" className="hover:text-white transition-colors">323.303.4851</a></p>
                  <p>📍 Hollywood, CA</p>
                  <p className="pt-2">
                    <a 
                      href="https://www.instagram.com/fiori.finti.cupcakes/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @fiori.finti.cupcakes
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-rose-800 flex flex-col md:flex-row justify-between items-center gap-4 text-rose-300 text-sm">
              <p>© 2026 Fior Finti Cupcakes. All Rights Reserved.</p>
              <p>
                Created by{' '}
                <a 
                  href="https://gevoglanyan.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-200 hover:text-white transition-colors font-medium"
                >
                  Harry Gevoglanyan
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        * {
          font-family: 'Montserrat', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>
    </>
  )
}