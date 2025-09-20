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
    <div className="min-h-screen font-['Inter',_sans-serif]" style={{ backgroundColor: '#E6F0FA', fontFamily: "'Inter', 'Roboto', 'Lato', sans-serif" }}>
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
              <a href="#" style={{ color: '#333' }} className="hover:text-blue-800 font-medium transition-colors text-sm sm:text-base">Om oss</a>
              <a href="#" style={{ color: '#333' }} className="hover:text-blue-800 font-medium transition-colors text-sm sm:text-base">Kontakt oss</a>
              <a href="#" style={{ color: '#333' }} className="hover:text-blue-800 font-medium transition-colors text-sm sm:text-base">Tips oss</a>
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
            Få full kontroll over økonomien din
          </h1>
          <div className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#333' }}>
            <p className="mb-3">Få oversikt over pensjon, lag ditt personlige budsjett, og få smarte økonomitips</p>
            <p>Alt samlet på ett sted, med <strong>PengPluss</strong></p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleLoginClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Registrer deg gratis
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-20">
            Alt du trenger for å ta kontroll over økonomien
          </h2>

          <div className="flex flex-col justify-center items-center" style={{ gap: '30px' }}>
            {/* Pensjon Box */}
            <button
              className="p-12 transition-colors duration-300 flex flex-col items-center justify-center text-center"
              style={{
                background: 'linear-gradient(to right, #93C5FD, #BFDBFE)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                borderRadius: '20px',
                width: '50%',
                margin: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #BFDBFE, #DBEAFE)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #93C5FD, #BFDBFE)'
              }}
            >
              <div className="text-6xl mb-6">🏦</div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1E3A8A' }}>Pensjon</h3>
              <p className="text-base leading-relaxed" style={{ color: '#1E3A8A' }}>
                Se hva du har spart, og planlegg for fremtiden.
              </p>
            </button>

            {/* Budsjett Box */}
            <button
              className="p-12 transition-colors duration-300 flex flex-col items-center justify-center text-center"
              style={{
                background: 'linear-gradient(to right, #6EE7B7, #A7F3D0)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                borderRadius: '20px',
                width: '50%',
                margin: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #A7F3D0, #D1FAE5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #6EE7B7, #A7F3D0)'
              }}
            >
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#065F46' }}>Budsjett</h3>
              <p className="text-base leading-relaxed" style={{ color: '#065F46' }}>
                Hold styr på inntekter, utgifter og sparemål – enkelt og visuelt.
              </p>
            </button>

            {/* Tips Box */}
            <button
              className="p-12 transition-colors duration-300 flex flex-col items-center justify-center text-center"
              style={{
                background: 'linear-gradient(to right, #FDE68A, #FEF9C3)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none',
                borderRadius: '20px',
                width: '50%',
                margin: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #FEF9C3, #FFFBEB)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #FDE68A, #FEF9C3)'
              }}
            >
              <div className="text-6xl mb-6">💡</div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#78350F' }}>Tips</h3>
              <p className="text-base leading-relaxed" style={{ color: '#78350F' }}>
                Smarte råd for å spare mer og investere klokt.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 border-t border-blue-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Klar til å ta kontroll over økonomien?
          </h2>
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start i dag – helt gratis!
          </button>
        </div>
      </section>
    </div>
  )
}