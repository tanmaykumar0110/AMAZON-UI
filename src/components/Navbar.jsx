import{Link}from"react-router-dom"
import{useContext}from"react"
import{AppContext}from"../context/AppContext"
export default function Navbar(){
const{state,dispatch}=useContext(AppContext)
return(<nav className="nav">
<Link to="/">Amazon</Link>
<div>
<Link to="/cart">Cart ({state.cart.length})</Link>
{state.user?(<><span>Hello {state.user}</span>
<button onClick={()=>dispatch({type:"LOGOUT"})}>Logout</button></>):(<Link to="/login">Login</Link>)}
</div></nav>)}