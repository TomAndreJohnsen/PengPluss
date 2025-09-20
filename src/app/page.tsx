'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/login')
  }

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E6F0FA' }}>
      {/* Navbar */}
      <nav className="border-b border-blue-200 py-3">
        <div className="w-full relative flex items-center min-h-[60px]">
          {/* Logo - 5% from left */}
          <div className="absolute left-[5%] flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">PengPluss</h1>
          </div>

          {/* Centered Navigation Links - Always visible, scale on mobile */}
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-[15vw]">
              <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm sm:text-base">Om oss</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm sm:text-base">Kontakt oss</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors text-sm sm:text-base">Tips oss</a>
            </div>
          </div>

          {/* Login Button - 5% from right */}
          <div className="absolute right-[5%] flex items-center">
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Logg inn / Opprett konto</span>
              <span className="sm:hidden">Logg inn</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Visual */}
          <div className="mb-12">
            <div className="w-64 h-64 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCE7F1' }}>
              <div className="text-6xl">📊</div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Din totale oversikt over din økonomi
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Ta kontroll over dine finanser med PengPluss. Pensjon, budsjett og smarte tips - alt på ett sted.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
            <button
              onClick={handleLoginClick}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Kom i gang
            </button>
            <button
              onClick={scrollToFeatures}
              className="bg-orange-100 hover:bg-orange-200 text-orange-700 hover:text-orange-800 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border border-orange-200 hover:border-orange-300 shadow-sm hover:shadow-md"
            >
              Les mer
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-16">
            Alt du trenger for å ta kontroll over økonomien
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pensjon Card */}
            <div className="rounded-xl p-8 shadow-lg border border-blue-200" style={{ backgroundColor: '#DCE7F1' }}>
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Pensjon</h3>
              <p className="text-blue-700 mb-6">
                Få oversikt over din pensjon og plan for fremtiden. Se hvor mye du har spart og hvor mye du trenger.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Les mer →
              </button>
            </div>

            {/* Budsjett Card */}
            <div className="rounded-xl p-8 shadow-lg border border-blue-200" style={{ backgroundColor: '#DCE7F1' }}>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Budsjett</h3>
              <p className="text-blue-700 mb-6">
                Lag og følg opp ditt personlige budsjett. Hold styr på inntekter, utgifter og sparemål.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Les mer →
              </button>
            </div>

            {/* Tips Card */}
            <div className="rounded-xl p-8 shadow-lg border border-blue-200" style={{ backgroundColor: '#DCE7F1' }}>
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Tips</h3>
              <p className="text-blue-700 mb-6">
                Få eksperttips og råd for å forbedre din økonomi. Lær hvordan du kan spare mer og investere smartere.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Les mer →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 border-t border-blue-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Klar til å ta kontroll over økonomien?
          </h2>
          <p className="text-xl text-blue-700 mb-8">
            Bli med tusenvis av nordmenn som allerede bruker PengPluss.
          </p>
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start i dag - helt gratis
          </button>
        </div>
      </section>
    </div>
  )
}