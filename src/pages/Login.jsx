import{useContext,useState}from"react"
import{AppContext}from"../context/AppContext"
import{useNavigate}from"react-router-dom"
export default function Login(){
const[name,setName]=useState("")
const{dispatch}=useContext(AppContext)
const nav=useNavigate()
const login=()=>{dispatch({type:"LOGIN",payload:name});nav("/")}
return(<div style={{padding:"20px"}}>
<input placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
<button onClick={login}>Login</button>
</div>)}