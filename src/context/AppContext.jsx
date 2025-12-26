import {createContext,useReducer,useEffect} from "react"
import reducer from "./reducer"
export const AppContext=createContext()
const initialState={
cart:JSON.parse(localStorage.getItem("cart"))||[],
user:JSON.parse(localStorage.getItem("user"))||null}
export const AppProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialState)
useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(state.cart))
localStorage.setItem("user",JSON.stringify(state.user))
},[state.cart,state.user])
return(<AppContext.Provider value={{state,dispatch}}>{children}</AppContext.Provider>)}