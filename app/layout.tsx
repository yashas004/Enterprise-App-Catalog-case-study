import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zluri Employee App Catalog - Case Study by Yashas Yadav',
  description: 'Comprehensive product management case study showcasing enterprise app discovery solution with 65% adoption target and ₹900,000 monthly ROI',
  keywords: 'product management, case study, enterprise apps, SaaS, Zluri',
  authors: [{ name: 'Yashas Yadav' }],
  openGraph: {
    title: 'Zluri Employee App Catalog Case Study',
    description: 'Interactive case study demonstrating enterprise app management solution',
    url: 'https://yashas-zluri-case-study.vercel.app',
    siteName: 'Yashas Yadav - Product Management Portfolio'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} page-wrapper bg-gray-50 text-gray-900 leading-relaxed`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
