import { createContext, useState } from "react";

//Context -> globaalse muutuja loomine


export const CartSumContext = createContext();

//rafc
export const CartSumContextProvider = ({children}) => { //Võtan kasutusele ainult korra
    const[cartSum, setCartSum] = useState(determineCartSum);

function determineCartSum(){
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    let sum = 0;
    cartLS.forEach(product => sum = sum + product.toode.price * product.kogus);
    return sum;
}

  return (        //globaalseks(teised faiid saavad kasutada), määran siin:
    <CartSumContext.Provider value={{cartSum, setCartSum}}>
        {children}
    </CartSumContext.Provider>
  )
}
