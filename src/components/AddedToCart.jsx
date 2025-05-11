import React from "react";
import "../assets/css/addtocart.css"
import { useSelector,useDispatch } from "react-redux";
import { decreaseCounter } from '../store/slices/counter';
import { increaseInAddedProductCounter, decreaseInAddedProductCounter } from "../store/slices/quantityCount";
import { useState } from "react";

function AddedToCart(props) {
  const { productItem, onDelete,addedIds} = props;
    const counterVal = useSelector(state => state.counter.value)
    // const cartIds = useSelector(state => state.cartProduct.value)
    // const addedProductVal = useSelector(state => state.QCounter.value)
  //  const cartItems = useSelector(state => state.QCounter.value);
    const cartIds = useSelector(state => state.cartProduct.value) 
    console.log(cartIds);
   

  const cartItems = cartIds.map(id => ({
    id:id,
    quantity:1
  }));
  const [items,setItems] = useState(cartItems);
//increment
console.log(cartItems);

    const handleIncrease = (id) =>{
    const updateItems = items.map(item =>
      item.id ===id?{...item,quantity:item.quantity +1} :item);
      setItems(updateItems)
    }
    const handleDecrease = (id) =>{
      const updateItems = items.map(item =>
        item.id ===id?{...item,quantity:item.quantity -1} :item);
        setItems(updateItems)
      }
  //  const CurrentQuantity =cartItems.quantity
  //   const dispatch = useDispatch();
 //calculate the total
 const handlePrice = (id) => {
  const matchItem =items.find(item => item.id === productItem.id);
  const quantity = matchItem?.quantity ?? 1;
  const totalPrice = Number(productItem?.price * quantity);
  return totalPrice;
 }

  if (counterVal == 0 ) {
    return(
        <div className="text-center">
            <h1>your cart is empty</h1>
        </div>
    )
}
  return (
    <div className="row added">
      <div className="col-md-6">
        {
          <img
            src={
              productItem?.images.length > 1
                ? productItem?.images?.[1]
                : productItem?.images?.[0]
            }
            alt={productItem?.title}
          />
        }
        <p className="title">{productItem?.title}</p>
      </div>
      <div className="col-md-6 mt-5">
        <div className="proImg">
        <div className="row justify-content-end">
          <div className="col-md-3">
          <button className="btn" onClick={() => handleIncrease(productItem.id)}><i class="fa-solid fa-square-plus"></i></button>
          <h5 className="d-sm-inline-block">  {
            items.find(item => item.id === productItem.id)?.quantity ?? 1}
          </h5>
          <button className="btn" onClick={() => handleDecrease(productItem.id)}><i class="fa-solid fa-square-minus"></i></button>
          </div>
          <div className="col-md-3">
            <button className=" bg-transparent" onClick={() => {onDelete(productItem?.id);dispatch(decreaseCounter())}}>
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
          <div className="col-md-3">
            <h5 className="price text-success">{ handlePrice(productItem.id)}$</h5>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddedToCart;
