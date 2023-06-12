"use client"



import { createContext, useContext } from "react";
import React, { useState,useEffect } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    

    const [region, setRegion] = useState("Delhi");
    const [alone, setAlone] = useState(false);
    const [calender, setCalender] = useState(false);
    const [currentPage, setCurrentPage] = useState(4);

  const value = { region , setRegion , alone, setAlone , calender, setCalender ,currentPage, setCurrentPage  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}