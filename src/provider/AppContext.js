import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  const providerValue = {}

  return <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
}

export const useAppState = () => {
  const context = useContext(AppContext);
  if(!context) throw Error('Use useAppState in AppContextProvider');

  return context;
}