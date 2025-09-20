'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (email === 'test@test.com' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/dashboard')
    } else {
      setError('Ugyldig e-post eller passord')
    }
  }

  const handleBackToLanding = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex justify-center font-['Inter',_sans-serif]" style={{ backgroundColor: '#E6F0FA', paddingTop: '10vh', fontFamily: "'Inter', 'Roboto', 'Lato', sans-serif" }}>
      <div className="text-center">
        {/* Header */}
        <div className="mb-16">
          <button
            onClick={handleBackToLanding}
            className="hover:text-blue-800 mb-4 inline-flex items-center transition-colors"
            style={{ color: '#333' }}
          >
            ← Tilbake til forsiden
          </button>
          <h1 className="text-6xl font-bold text-blue-800 mb-8 tracking-wide">
            Peng Pluss
          </h1>
          <p className="text-xl font-medium" style={{ color: '#333' }}>
            Logg inn på din konto
          </p>
        </div>

        {/* Login Form Container */}
        <div className="shadow-lg max-w-sm mx-auto border border-gray-300" style={{ backgroundColor: '#DCE7F1', borderRadius: '12px', padding: '30px' }}>
          <form onSubmit={handleLogin}>
            <div className="mb-8">
              <label htmlFor="email" className="block text-base font-semibold mb-3 text-center" style={{ color: '#333' }}>
                Brukernavn
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 shadow-sm"
                placeholder="test@test.com"
              />
            </div>

            <div className="mb-10">
              <label htmlFor="password" className="block text-base font-semibold mb-3 text-center" style={{ color: '#333' }}>
                Passord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 shadow-sm"
                placeholder="1234"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center font-medium bg-red-50 py-3 px-4 rounded-lg border border-red-200 mb-8">
                {error}
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-blue-300 transition-all duration-300 hover:scale-[1.02]"
              >
                Logg inn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}