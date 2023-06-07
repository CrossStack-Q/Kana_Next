"use client"

import './globals.css'
import { ThemeProvider } from "next-themes"





import Navbar from '@/components/Navbar'
import Image from 'next/image'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="max-w-7xl mx-auto">

      <Navbar/>
      <HomePage/>
      
    </main>
    </ThemeProvider>
  )
}
