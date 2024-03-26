// pages/_app.tsx

import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'

import { SnackbarProvider } from 'notistack'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EBook Mania',
  description: 'Generated by create next app',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )
}

export default MyApp