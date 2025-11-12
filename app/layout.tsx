import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vivian Arias Verdin - Ingeniera en Sistemas & Desarrolladora",
  description:
    "Portafolio de Vivian Arias Verdin - Ingeniera en Sistemas especializada en desarrollo de software, IoT y aplicaciones educativas",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-16x16.svg",
        type: "image/svg+xml",
        sizes: "16x16",
      },
    ],
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
