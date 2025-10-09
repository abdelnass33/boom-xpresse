import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BoomXpresse - China Import & International Logistics | Free Quote",
  description: "🚀 Import easily from China with BoomXpresse! Sourcing, quality control, maritime transport and customs clearance. Professional service since 2020. Free quote in 24h ⚡",
  openGraph: {
    locale: 'en_US',
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}