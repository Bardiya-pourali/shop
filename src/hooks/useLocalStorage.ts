import { useEffect, useState } from "react"

export const useLocalStorage =<T> (key:string,initalValue:T) => {
const [value,setValue] =  useState<T>(()=>{
    let localCart=localStorage.getItem("cartItems")

    if(localCart!=null)
        return JSON.parse(localCart)
    else
    return initalValue;
})

useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
},[key,value])

return [value,setValue] as [typeof value,typeof setValue]
}


