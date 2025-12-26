import{Link}from"react-router-dom"
export default function ProductCard({product}){
return(<div className="card">
<img src={product.image} width="150"/>
<h4>{product.title}</h4>
<p>₹{product.price}</p>
<p>⭐ {product.rating}</p>
<Link to={`/product/${product.id}`}>View</Link>
</div>)}