'use client'

import { useRouter } from 'next/navigation'

export default function BudsjettPage() {
  const router = useRouter()

  const budgetCategories = [
    {
      name: 'Bolig',
      amount: 15000,
      description: 'Husleie, strøm, kommunale avgifter og vedlikehold av bolig'
    },
    {
      name: 'Forbruk',
      amount: 8000,
      description: 'Mat, dagligvarer, klær og personlige artikler'
    },
    {
      name: 'Sparing',
      amount: 5000,
      description: 'Månedlig sparing til fremtidige mål og buffer'
    },
    {
      name: 'Transport',
      amount: 3500,
      description: 'Bil, drivstoff, kollektivtransport og reiser'
    },
    {
      name: 'Forsikring',
      amount: 2500,
      description: 'Bolig-, bil-, reise- og livsforsikring'
    },
    {
      name: 'Annet',
      amount: 2000,
      description: 'Diverse utgifter, gaver og uforutsette kostnader'
    }
  ]

  const totalBudget = budgetCategories.reduce((sum, category) => sum + category.amount, 0)

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

          {/* Navigation space - empty for now */}
          <div className="flex items-center justify-center w-full">
          </div>

          {/* Back Button - 5% from right */}
          <div className="absolute right-[5%] flex items-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">← Tilbake</span>
              <span className="sm:hidden">←</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <div className="flex-1" style={{ position: 'relative', zIndex: 1 }}>
        {/* Page Title */}
        <section className="px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-blue-800 mb-2 leading-tight">
              Budsjett
            </h1>
            <div className="text-base mb-6" style={{ color: '#333' }}>
              <p>Administrer ditt månedlige budsjett</p>
            </div>
          </div>
        </section>

        {/* Budget Categories Grid */}
        <section className="px-6 py-4">
          <div className="max-w-6xl mx-auto">
            {/* First row - 3 categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {budgetCategories.slice(0, 3).map((category, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{ minHeight: '200px' }}
                >
                  {/* Category Title */}
                  <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#1E3A8A' }}>
                    {category.name}
                  </h3>

                  {/* Content Area */}
                  <div className="flex flex-col space-y-4">
                    {/* Description Area */}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
                        {category.description}
                      </p>
                    </div>

                    {/* Amount Area */}
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold" style={{ color: '#065F46' }}>
                        kr {category.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 3 categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {budgetCategories.slice(3, 6).map((category, index) => (
                <div
                  key={index + 3}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{ minHeight: '200px' }}
                >
                  {/* Category Title */}
                  <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#1E3A8A' }}>
                    {category.name}
                  </h3>

                  {/* Content Area */}
                  <div className="flex flex-col space-y-4">
                    {/* Description Area */}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed" style={{ color: '#333' }}>
                        {category.description}
                      </p>
                    </div>

                    {/* Amount Area */}
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold" style={{ color: '#065F46' }}>
                        kr {category.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Budget Summary */}
            <div className="max-w-md mx-auto">
              <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-xl text-center">
                <h3 className="text-lg font-bold mb-2">Totalt budsjett</h3>
                <p className="text-3xl font-bold">kr {totalBudget.toLocaleString()}</p>
              </div>
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