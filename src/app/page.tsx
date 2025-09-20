'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleLoginClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEmail('')
    setPassword('')
    setError('')
    setRememberMe(false)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (email === 'test@test.com' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true')
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true')
      }
      router.push('/dashboard')
    } else {
      setError('Ugyldig e-post eller passord')
    }
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

      {/* Login Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{
            backgroundColor: 'rgba(230, 240, 250, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#DCE7F1',
              borderRadius: '20px',
              fontFamily: "'Inter', 'Roboto', 'Lato', sans-serif",
              width: 'auto',
              maxWidth: '400px',
              minWidth: '320px',
              padding: '30px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#666',
                cursor: 'pointer',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#333'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            >
              ×
            </button>

            {/* Modal Header */}
            <div style={{ textAlign: 'center', marginBottom: '25px', marginTop: '10px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E3A8A', margin: '0 0 8px 0' }}>
                Logg inn
              </h2>
              <p style={{ fontSize: '14px', color: '#333', margin: '0' }}>
                Velkommen tilbake til PengPluss
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Brukernavn
                </label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@test.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '25px',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Passord
                </label>
                <input
                  id="modal-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="1234"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '25px',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                />
              </div>

              {/* Remember Me Checkbox */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ marginRight: '8px', width: '16px', height: '16px' }}
                  />
                  <span style={{ fontSize: '14px', color: '#333' }}>Husk meg</span>
                </label>
              </div>

              {error && (
                <div style={{
                  color: '#dc2626',
                  fontSize: '14px',
                  textAlign: 'center',
                  backgroundColor: '#fef2f2',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #fecaca',
                  marginBottom: '20px'
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                Logg inn
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}