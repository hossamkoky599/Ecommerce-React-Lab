import { createSlice } from "@reduxjs/toolkit";


const cartProducts = createSlice({
    name:'cartProduct',
    initialState:{
        value:[],
        maxValue:100
    },
    reducers:{
        pushIds: (state,action) => {
            state.value =[...state.value,action.payload]
        },
    }
});

export const {pushIds} = cartProducts.actions
export default cartProducts.reducer;