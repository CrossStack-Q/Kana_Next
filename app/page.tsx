"use client"

import './globals.css'
import { ThemeProvider } from "next-themes"



import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
    <main className="">
      Hello
      <Button/>
      <Navbar/>
    </main>
    </ThemeProvider>
  )
}
