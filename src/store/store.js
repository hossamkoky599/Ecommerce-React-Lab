import {configureStore} from "@reduxjs/toolkit";
import cartCounter from "./slices/counter"
import cartProducts from "./slices/cartProducts"
import QuantityCounter from "./slices/quantityCount"
const store = configureStore({
    reducer:{
        counter :cartCounter,
        cartProduct:cartProducts,
        QCounter:QuantityCounter
    }
})

export default store;