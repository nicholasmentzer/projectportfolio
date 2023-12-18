import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Project Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header />{children}<Footer /></body>
    </html>
  )
}