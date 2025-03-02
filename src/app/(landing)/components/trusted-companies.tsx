import Image from 'next/image'

const companies = [
  { name: 'Scarlett', logo: 'https://cekat.ai/assets/scarlett-logo-c2c7c8c1.svg' },
  { name: 'Shieldtag', logo: 'https://cekat.ai/assets/shieldtag-logo-c2c7c8c1.svg' },
  { name: 'WIR', logo: 'https://cekat.ai/assets/wir-logo-c2c7c8c1.svg' },
  { name: 'Astra', logo: 'https://cekat.ai/assets/astra-logo-c2c7c8c1.svg' },
  { name: "Ekle's Clinic", logo: 'https://cekat.ai/assets/ekles-logo-c2c7c8c1.svg' },
  { name: 'IndiHome', logo: 'https://cekat.ai/assets/indihome-logo-c2c7c8c1.svg' },
]

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12 text-white">
          Trusted by Top Businesses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100"
            >
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
