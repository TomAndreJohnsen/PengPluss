'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    } else {
      router.push('/')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    router.push('/')
  }

  const handleCardClick = (module: string) => {
    router.push(`/${module}`)
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-lg">Laster...</div>
    </div>
  }

  return (
    <div
      className="h-screen font-['Inter',_sans-serif] flex flex-col"
      style={{
        fontFamily: "'Inter', 'Roboto', 'Lato', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        maxHeight: '100vh'
      }}
    >
      {/* Wave background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(135deg, #E6F0FA 0%, #F0F7FF 100%),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 25 50 50 T100 50 V100 H0 Z' fill='%23DCE7F1' fill-opacity='0.3'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 70 Q50 40 100 70 T200 70 V100 H0 Z' fill='%23BFDBFE' fill-opacity='0.2'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'cover, 400px 200px, 800px 400px',
          backgroundPosition: 'center, 0 20%, 0 60%',
          backgroundRepeat: 'no-repeat, repeat-x, repeat-x',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Navbar */}
      <nav className="border-b border-blue-200 py-3" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full relative flex items-center min-h-[60px]">
          {/* Logo - 5% from left */}
          <div className="absolute left-[5%] flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">PengPluss</h1>
          </div>

          {/* Navigation space - empty for now, links will appear when needed */}
          <div className="flex items-center justify-center w-full">
          </div>

          {/* Logout Button - 5% from right */}
          <div className="absolute right-[5%] flex items-center">
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Logg ut</span>
              <span className="sm:hidden">Logg ut</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <div className="flex-1" style={{ position: 'relative', zIndex: 1 }}>
        {/* Dashboard Content */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-4 leading-tight">
              Dashboard
            </h1>
            <div className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#333' }}>
              <p>Velkommen til din personlige økonomiportal</p>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center" style={{ gap: '15px' }}>
              {/* Pensjon Box */}
              <button
                onClick={() => handleCardClick('pensjon')}
                className="p-8 transition-colors duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #93C5FD, #BFDBFE)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: 'none',
                  borderRadius: '20px',
                  width: '50%',
                  margin: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #BFDBFE, #DBEAFE)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #93C5FD, #BFDBFE)'
                }}
              >
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>Pensjon</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1E3A8A' }}>
                  Se hva du har spart, og planlegg for fremtiden.
                </p>
              </button>

              {/* Budsjett Box */}
              <button
                onClick={() => handleCardClick('budsjett')}
                className="p-8 transition-colors duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #6EE7B7, #A7F3D0)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: 'none',
                  borderRadius: '20px',
                  width: '50%',
                  margin: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #A7F3D0, #D1FAE5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #6EE7B7, #A7F3D0)'
                }}
              >
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#065F46' }}>Budsjett</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#065F46' }}>
                  Hold styr på inntekter, utgifter og sparemål – enkelt og visuelt.
                </p>
              </button>

              {/* Tips Box */}
              <button
                className="p-8 transition-colors duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #FDE68A, #FEF9C3)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: 'none',
                  borderRadius: '20px',
                  width: '50%',
                  margin: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #FEF9C3, #FFFBEB)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #FDE68A, #FEF9C3)'
                }}
              >
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#78350F' }}>Tips</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78350F' }}>
                  Smarte råd for å spare mer og investere klokt.
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Footer */}
      <footer className="border-t border-blue-200 pt-4 pb-8" style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(230, 240, 250, 0.8)', backdropFilter: 'blur(10px)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center" style={{ gap: '48px' }}>
            <a href="#" className="text-xs font-light transition-colors hover:underline" style={{ color: '#6B8BB3', padding: '8px 12px' }}>
              Om oss
            </a>
            <a href="#" className="text-xs font-light transition-colors hover:underline" style={{ color: '#6B8BB3', padding: '8px 12px' }}>
              Kontakt oss
            </a>
            <a href="#" className="text-xs font-light transition-colors hover:underline" style={{ color: '#6B8BB3', padding: '8px 12px' }}>
              Tips oss
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}