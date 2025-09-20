'use client'

import { useRouter } from 'next/navigation'

export default function BudsjettPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Budsjett</h1>
              <p className="text-gray-600">Administrer ditt månedlige budsjett</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Budsjettoversikt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Månedlig inntekt</h3>
              <p className="text-3xl font-bold text-green-700">kr 45 000</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Totale utgifter</h3>
              <p className="text-3xl font-bold text-red-700">kr 32 500</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Tilgjengelig</h3>
              <p className="text-3xl font-bold text-blue-700">kr 12 500</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Utgiftskategorier</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Bolig</span>
                <span className="text-lg font-semibold">kr 15 000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Mat & dagligvarer</span>
                <span className="text-lg font-semibold">kr 8 000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Transport</span>
                <span className="text-lg font-semibold">kr 5 500</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">Øvrige utgifter</span>
                <span className="text-lg font-semibold">kr 4 000</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600">
              Dette er en placeholder-side for budsjettmodulen. Her vil du kunne administrere ditt månedlige budsjett,
              kategorisere utgifter og få oversikt over din økonomiske situasjon.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}