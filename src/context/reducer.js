export default function reducer(state,action){
switch(action.type){
case"ADD_TO_CART":
const exist=state.cart.find(i=>i.id===action.payload.id)
if(exist){return{...state,cart:state.cart.map(i=>i.id===action.payload.id?{...i,qty:i.qty+1}:i)}}
return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
case"REMOVE":
return{...state,cart:state.cart.filter(i=>i.id!==action.payload)}
case"QTY":
return{...state,cart:state.cart.map(i=>i.id===action.payload.id?{...i,qty:action.payload.qty}:i)}
case"LOGIN":return{...state,user:action.payload}
case"LOGOUT":return{...state,user:null}
default:return state}}