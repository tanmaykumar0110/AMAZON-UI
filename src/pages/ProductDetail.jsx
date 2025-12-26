import{useParams}from"react-router-dom"
import{products}from"../data/products"
import{useContext}from"react"
import{AppContext}from"../context/AppContext"
export default function ProductDetail(){
const{id}=useParams()
const{dispatch}=useContext(AppContext)
const product=products.find(p=>p.id==id)
return(<div className="detail">
<img src={product.image} width="250"/>
<div><h2>{product.title}</h2>
<p>{product.description}</p>
<p>₹{product.price}</p>
<button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>Add to Cart</button>
</div></div>)}