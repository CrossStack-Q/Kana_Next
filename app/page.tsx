"use client"

import './globals.css'
import { ThemeProvider } from "next-themes"



import { AppWrapper } from "@/store/state"



import Navbar from '@/components/Navbar'
import Image from 'next/image'
import HomePage from '@/components/HomePage'
import DatePage from '@/components/DatePage'
import GuestPage from '@/components/GuestPage'

export default function Home() {
  return (
    <AppWrapper>
      <ThemeProvider attribute="class">
        <main className="max-w-7xl mx-auto">

          <Navbar />
          <HomePage/>
          <DatePage />
          <GuestPage/>

        </main>
      </ThemeProvider>

    </AppWrapper>
  )
}




