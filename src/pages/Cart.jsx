import{useContext}from"react"
import{AppContext}from"../context/AppContext"
import{Link}from"react-router-dom"
export default function Cart(){
const{state,dispatch}=useContext(AppContext)
const total=state.cart.reduce((a,c)=>a+c.price*c.qty,0)
return(<div style={{padding:"20px"}}>
{state.cart.map(i=>(<div key={i.id}>
<h4>{i.title}</h4>
<input type="number" value={i.qty} min="1"
onChange={e=>dispatch({type:"QTY",payload:{id:i.id,qty:+e.target.value}})}/>
<button onClick={()=>dispatch({type:"REMOVE",payload:i.id})}>Remove</button>
</div>))}
<h3>Total: ₹{total}</h3>
<Link to="/checkout">Checkout</Link>
</div>)}