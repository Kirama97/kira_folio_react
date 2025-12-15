import React, { createContext, useContext ,useState } from 'react'
import { data } from '../bd/data';

const kiraContext = createContext()


const Use_kira = ({children}) => {
    
      const projets = data();

  const contextValue = {

    projets

  }


  return (

    <kiraContext.Provider value={contextValue}>
       {children}
    </kiraContext.Provider>
  )
}

export const  usekiraContext = () => useContext(kiraContext) ; 
export default Use_kira
