import './globals.css'

export const metadata = {
  title: 'PengPluss',
  description: 'Din totale oversikt over din økonomi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}