import React, {  useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../apis/config";
import AddedToCart from '../components/AddedToCart';
import "../assets/css/cart.css"
function ShoppingCart() {
const [product, setProduct] = useState([]);
// const [requests,setRequests] = useState();
const [isLoading, setIsLoading] = useState(true);
const cartIds = useSelector(state => state.cartProduct.value)
// console.log(cartIds);

// if(cartIds != 0){
//     for (let i = 0; i < cartIds.length; i++) {
//         useEffect(() => {
//             axiosInstance
//               .get(`/products/${cartIds[i]}`)
//               .then((res) => setProduct([res.data]))
//               .catch((err) => console.log(err));
//           },[cartIds]);
//     }

// }
useEffect(()=>{
    //always Forget to check fro length

    if(cartIds.length == 0){
        setIsLoading(false);
        return;
    }
    //get all requests and store it 
    const productRequests =cartIds.map(id => axiosInstance.get(`/products/${id}`));

    //get data from request from by promise
    Promise.all(productRequests).then(responses => {
        //map each response and return with its data
        const productData = responses.map(res => res.data)
        
        setProduct(productData)
    }).catch(err => {console.error("Fetching product error:",err)}).
    finally(()=>{setIsLoading(false)});
},[cartIds]);

// console.log(product);

if (cartIds.length ==0 ) {
    return(
        <div className="text-center">
            <h1>your cart is empty</h1>
        </div>
    )
}
const handleDelete = (id) =>{
    const newProducts = product.filter((product) => product.id !== id)
    setProduct(newProducts);
}
 return (
  <>
  
    <div className="container co_cart">
    {isLoading && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
        <div className="row">
            <div className="col-md-6">
                <div className="head"><h3>Desc</h3></div>
            </div>
            <div className="col-md-6">
                <div className="row justify-content-end">
                    <div className="col-md-3">
                        <h5>Quantity</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Remove</h5>
                    </div>
                    <div className="col-md-3">
                        <h5>Price</h5>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="row">
            {product.map((pro)=>{
                return(
                    <div className="col-12" key={pro.id}>    
                        <AddedToCart
                            productItem={pro}
                            onDelete={(id) => handleDelete(id)}
                            addedIds={cartIds}
                        />
                    </div>
                )
            })} 
        </div>
    </div>
    
  </>
  )
}

export default ShoppingCart