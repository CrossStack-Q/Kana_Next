"use client"



import { createContext, useContext } from "react";
import React, { useState,useEffect } from "react";
const AppContext = createContext();

export function AppWrapper({ children }) {
    

    const [region, setRegion] = useState("Delhi");
  

  const value = { region , setRegion };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}