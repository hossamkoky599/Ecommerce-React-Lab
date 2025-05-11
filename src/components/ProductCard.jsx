import React from 'react'
import { Link,useNavigate } from 'react-router'
import "../assets/css/productCard.css"
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter } from '../store/slices/counter';
import { pushIds } from '../store/slices/cartProducts';
export default function ProductCard(props) {
      //  console.log(props.productItem)
      const navigate = useNavigate();
      const reDirectToDetails = (productID) =>{
        navigate(`/product-details/${productID}`)
      }
      //access the value of counter in cart
      const counterVal = useSelector(state => state.counter.value)
      //access the array of IDs of cartProduct
      const cartProduct = useSelector(state => state.cartProduct.value)
      const dispatch = useDispatch();
  return (
    <div className="card ">
      <div className="checkStuck">
        {props.productItem.availabilityStatus === "In Stock" ?
          <span className='inStock'>In Stock</span>
        :  <span className='outOfStock'>Out Of Stock</span>}
      </div>
      {/*  first image of array in many products is undefined so chick for the array of images */}
    <img
      src={props.productItem.images.length > 1 ?
         props.productItem.images[1]
        : props.productItem.images[0]}
      className="card-img-top"
      alt={props.productItem.name}
    />
    <div className="card-body">
      {/* {recipeItem.prepTimeMinutes <= 10 && <span class="badge text-bg-success">Easy to go</span>} */}
      {/* {recipeItem.prepTimeMinutes <= 10 ? (
        <span class="badge text-bg-success">Easy to go</span>
      ) : (
        <span class="badge text-bg-warning">Need more time</span>
      )} */}
      <Link to={`/product-details/${props.productItem.id}`}>
      <h2></h2>
    
      </Link>
      <div className="card-head">
        <h4> {props.productItem.title}</h4>
        
      </div>
        <div className="content d-flex justify-content-between">
        <p className="card-text">
          Brand: {props.productItem.brand}
        </p>
        <span> {props.productItem.price}$</span>
        </div>
  
    </div>
    <div className="footer text-center">
    <button className='btn btn-info mx-2'
        onClick={() => reDirectToDetails(props.productItem.id)}
      >
        View
      </button>
      {/* <button className="btn btn-danger mx-2" onClick={() => props.onDelete(props.productItem.id)}>
        Delete
      </button> */}
      <button className='btn btn-success' onClick={() => {alert("added successfully") ;dispatch(increaseCounter()); dispatch(pushIds(props.productItem.id))}} > AddToCart<i className="fa-solid fa-cart-shopping"></i></button>
    </div>
  </div>
  )
}
