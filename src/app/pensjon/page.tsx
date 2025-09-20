'use client'

import { useRouter } from 'next/navigation'

export default function PensjonPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pensjon
              </h1>
              <p className="text-gray-700 font-medium mt-1">Oversikt over pensjonsopptjening</p>
            </div>
            <button
              onClick={() => router.push('/dashboard')}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium px-6 py-3 rounded-2xl hover:bg-white/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Tilbake til dashboard</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/30">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Pensjonsdetaljer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-3xl border border-blue-200/30 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Estimert månedlig pensjon</h3>
              <p className="text-4xl font-bold text-blue-700">kr 18 500</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 rounded-3xl border border-gray-200/30 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pensjonsalder</h3>
              <p className="text-4xl font-bold text-gray-700">67 år</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-8 rounded-3xl border border-white/30">
            <p className="text-gray-700 leading-relaxed text-lg">
              Dette er en placeholder-side for pensjonsmodulen. Her vil du kunne se detaljert informasjon
              om din pensjonsopptjening, fremtidige utbetalinger og muligheter for å optimalisere pensjonssparingen.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}