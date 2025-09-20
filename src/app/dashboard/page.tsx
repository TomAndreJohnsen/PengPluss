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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PengPluss
              </h1>
              <p className="text-gray-700 font-medium mt-1">Din totale oversikt over din økonomi</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium px-4 py-2 rounded-xl hover:bg-white/50 transition-all duration-200"
            >
              Logg ut
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div
            onClick={() => handleCardClick('pensjon')}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-white/30 group"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Pensjon</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Oversikt over pensjonsopptjening og fremtidige utbetalinger
            </p>
            <div className="bg-blue-50/50 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Estimert månedlig pensjon</span>
                <span className="text-xl font-bold text-blue-700">kr 18 500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Pensjonsalder</span>
                <span className="text-xl font-bold text-blue-700">67 år</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleCardClick('budsjett')}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 cursor-pointer hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 border border-white/30 group"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 mr-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Budsjett</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Administrer ditt månedlige budsjett og sporing av utgifter
            </p>
            <div className="bg-green-50/50 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Månedlig inntekt</span>
                <span className="text-xl font-bold text-green-700">kr 45 000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Tilgjengelig</span>
                <span className="text-xl font-bold text-green-700">kr 12 500</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}