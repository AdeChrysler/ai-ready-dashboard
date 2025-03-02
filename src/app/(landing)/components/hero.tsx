import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Layani Pelanggan{' '}
              <span className="block text-blue-400">Full Autopilot 24/7</span>
              dengan{' '}
              <span className="text-blue-400">AI Agents</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Tingkatkan Efisiensi tim sales dan support, dan scale up bisnis anda
            </p>
            <p className="text-gray-400">
              AI Agent + Omnichannel CRM Super App
            </p>
            
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
                Konsultasi Dengan Kami
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/50"
              >
                Pakai Sekarang
              </Button>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              *Free Training & Full Sales Support
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">5.000.000+</p>
                <p className="text-gray-400">Interaksi Pelanggan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3.000+</p>
                <p className="text-gray-400">Bisnis</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Testimonials */}
          <div className="relative">
            {/* Main Circle with Image */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-blue-900/20 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="AI Agent"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
              </div>
              
              {/* Testimonial Bubbles - Now positioned relative to the parent div */}
              <div className="absolute -top-4 -right-4 z-10 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[250px] border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">C</div>
                  <span className="font-medium text-white">Chika</span>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
                <p className="text-sm text-gray-300">"Thanks cekat, timku udah ga perlu lembur lagi"</p>
              </div>

              <div className="absolute -bottom-4 -left-4 z-10 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-[250px] border border-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">J</div>
                  <span className="font-medium text-white">Jeff</span>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
                <p className="text-sm text-gray-300">"Bisnis gw bisa scale up tanpa nambah orang"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
