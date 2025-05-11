import React from 'react'
import { useEffect , useState } from 'react'
import { axiosInstance } from '../apis/config'
import ProductCard from '../components/ProductCard';
import "../assets/css/productList.css"
export default function ProductList() {


const [products,setProducts] = useState([])
//CheckLoading
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
    axiosInstance.get("/products",)
    .then((res) => setProducts(res.data.products))
    .catch((err) => console.log(err))
    .finally(()=> setIsLoading(false))
},[]);
const handleDelete = (id) =>{
    const newProducts = products.filter((product) => product.id !== id)
    setProducts(newProducts);
}



  return (
    <>
    <div className="heading text-center">
        <h2>Product List</h2>
    </div>
    <hr />
    {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    <div className="row row-cols-1 row-cols-md-3 gap-3">
        {products.map((product)=> {
            return(
                <div className="col" key={product.id}>
                        <ProductCard
                            productItem={product}
                            onDelete={(id) => handleDelete(id)}
                        />
                </div>
            )
        })}
    </div>
    </>
  )
}
