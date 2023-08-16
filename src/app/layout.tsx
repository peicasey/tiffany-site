import './globals.css'
import type { Metadata } from 'next'

// components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export const metadata: Metadata = {
  title: "Tiffany's Site",
  description: 'A personal website for public health student, Tiffany Pei :)',
  generator: 'Next.js',
  applicationName: 'TiffanySite',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Typescript', 'public health', 'epidemiology'],
  authors: [{ name: 'Casey Pei', url: 'https://caseypei.me' }, { name: 'Tiffany Pei' }],
  // colorScheme: 'dark',
  creator: 'Casey Pei',
  publisher: 'Casey Pei',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tiffany's Site",
    description: 'A personal website for public health student, Tiffany Pei :)',
    url: 'https://tiffany-site.vercel.app/',
    siteName: 'Tiffany Pei',
    images: [
      {
        url: 'https://tiffany-site.vercel.app/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://tiffany-site.vercel.app/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://tiffany-site.vercel.app/')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <div className='flex min-h-screen flex-col items-center justify-between p-12 sm:p-24 bg-lilac dark:bg-moody'>
          <Navbar />
          <div className='w-full h-full'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
