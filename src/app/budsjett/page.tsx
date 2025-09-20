'use client'

import { useRouter } from 'next/navigation'

export default function BudsjettPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Budsjett
              </h1>
              <p className="text-gray-700 font-medium mt-1">Administrer ditt månedlige budsjett</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Budsjettoversikt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-3xl border border-green-200/30 shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">Månedlig inntekt</h3>
              <p className="text-4xl font-bold text-green-700">kr 45 000</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-3xl border border-red-200/30 shadow-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4">Totale utgifter</h3>
              <p className="text-4xl font-bold text-red-700">kr 32 500</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-3xl border border-blue-200/30 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Tilgjengelig</h3>
              <p className="text-4xl font-bold text-blue-700">kr 12 500</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50/50 to-white/50 rounded-3xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Utgiftskategorier</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40">
                <span className="font-semibold text-gray-800">Bolig</span>
                <span className="text-xl font-bold text-gray-700">kr 15 000</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40">
                <span className="font-semibold text-gray-800">Mat & dagligvarer</span>
                <span className="text-xl font-bold text-gray-700">kr 8 000</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40">
                <span className="font-semibold text-gray-800">Transport</span>
                <span className="text-xl font-bold text-gray-700">kr 5 500</span>
              </div>
              <div className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/40">
                <span className="font-semibold text-gray-800">Øvrige utgifter</span>
                <span className="text-xl font-bold text-gray-700">kr 4 000</span>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-8 rounded-3xl border border-white/30">
            <p className="text-gray-700 leading-relaxed text-lg">
              Dette er en placeholder-side for budsjettmodulen. Her vil du kunne administrere ditt månedlige budsjett,
              kategorisere utgifter og få oversikt over din økonomiske situasjon.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}