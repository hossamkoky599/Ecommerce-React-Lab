import React from 'react';
import { Route ,Routes } from 'react-router';
import Header from '../components/Header';
import LayoutWithHeader from '../components/LayoutWithHeader';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
import ShoppingCart from '../pages/shoppingCart';
import NotFound from '../pages/NotFound';


export default function RoutesList() {
  return (
    <Routes>
        <Route element={<LayoutWithHeader/>}> 
            <Route path='/' element={<ProductList/>}/>
            <Route path='/product-details/:id' element={<ProductDetails />}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
