"use client"

import './globals.css'
import { ThemeProvider } from "next-themes"


import { AppWrapper } from "@/store/state"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import MainPage from '@/components/MainPage'

export default function Home() {

  



  return (
    <AppWrapper>
      <ThemeProvider attribute="class">
        <main className="max-w-7xl mx-auto">

          <Navbar />
          <MainPage/>
          

        </main>
      </ThemeProvider>

    </AppWrapper>
  )
}




