"use client"


import { useAppContext } from "@/store/state";
import React from 'react'
import HomePage from "./HomePage";
import DatePage from "./DatePage";
import GuestPage from "./GuestPage";
import Hotels from "./Hotels";

function MainPage() {

    const { currentPage, setCurrentPage } = useAppContext();

  return (
    <div>
        {currentPage === 1 && (
        <HomePage/>
      )}
      {currentPage === 2 && (
        <DatePage />
      )}
      {currentPage === 3 && (
        <GuestPage/>
      )}
      {currentPage === 4 && (
        <Hotels/>
      )}
    </div>
  )
}

export default MainPage