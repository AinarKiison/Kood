import { createContext, useState } from "react";

//Context -> globaalse muutuja loomine


export const AuthContext = createContext();

//rafc
export const AuthContextProvider = ({children}) => { //Võtan kasutusele ainult korra
    const[loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "token123");


  return (        //globaalseks(teised faiid saavad kasutada), määran siin:
    <AuthContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}
