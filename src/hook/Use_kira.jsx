import React, { createContext, useContext ,useState } from 'react'


const kiraContext = createContext()



const Use_kira = ({children}) => {
 
    const [projets ,setProjets] = useState(["0"])

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
