'use client';
import Hero from '@/pages/Hero'
import { SnackbarProvider } from 'notistack'

export default function Home() {
  return (
    <SnackbarProvider>
      <main>
        <Hero />
      </main>
    </SnackbarProvider>
  )
}
