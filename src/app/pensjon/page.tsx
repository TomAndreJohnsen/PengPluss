'use client'

import { useRouter } from 'next/navigation'

export default function PensjonPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pensjon</h1>
              <p className="text-gray-600">Oversikt over pensjonsopptjening</p>
            </div>
            <button
              onClick={() => router.push('/dashboard')}
              className="text-sm text-blue-600 hover:text-blue-800 transition duration-200"
            >
              ← Tilbake til dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pensjonsdetaljer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Estimert månedlig pensjon</h3>
              <p className="text-3xl font-bold text-blue-700">kr 18 500</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pensjonsalder</h3>
              <p className="text-3xl font-bold text-gray-700">67 år</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-600">
              Dette er en placeholder-side for pensjonsmodulen. Her vil du kunne se detaljert informasjon
              om din pensjonsopptjening, fremtidige utbetalinger og muligheter for å optimalisere pensjonssparingen.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}