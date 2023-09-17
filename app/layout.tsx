import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A personal portfolio site built with Sanity and Next.js',
  openGraph: {
    images: "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Ftb97xx0gj8ob1.png"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
