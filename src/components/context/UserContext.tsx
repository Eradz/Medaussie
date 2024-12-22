'use client'

import React, { createContext, useContext, useState } from 'react'

export interface userType  {
    _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}
type dataType = {
  user: userType
  setUser:  React.Dispatch<React.SetStateAction<userType>>
}

const user = {
  _id: "",
  firstname: "",
  lastname: "",
  email: "",
  role: "",
}

  const defaultData= {
    user,
    setUser: () => {}
  }

  const EventCreatorContext = createContext<dataType>(defaultData);
  export const UserContext = () =>{
    return useContext(EventCreatorContext)
  }
  export const EventCreatorContextProvider = ({children}: {children : React.ReactNode}) =>{
    const [user, setUser] = useState<userType>({
        _id: "",
        firstname: "",
        lastname: "",
        email: "",
        role: "",})
   
    return(
      <EventCreatorContext.Provider value={{user, setUser}}>
       {children}
      </EventCreatorContext.Provider>
    )
  }
