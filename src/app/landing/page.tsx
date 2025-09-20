'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/')
  }

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E6F0FA' }}>
      {/* Navbar */}
      <nav className="px-6 py-4 border-b border-blue-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-800">PengPluss</h1>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Om oss</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Tips</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">Kontakt</a>
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Logg inn / Opprett konto
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Kom i gang
            </button>
            <button
              onClick={scrollToFeatures}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
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