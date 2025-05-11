import { createSlice } from "@reduxjs/toolkit";

const QuantityCounter = createSlice({
    name:'QCounter',
    initialState:{
        value:1,
        maxValue: 20,
    },
    reducers:{
        increaseInAddedProductCounter: (state) => {
            state.value = state.value + 1;
          },
        decreaseInAddedProductCounter: (state) => {
        if (state.value == 1){
            alert("If you want to Delete the item press in Delete Icon ")
            return;
        }else{
            state.value = state.value - 1;
        }
        },
    }
});

// const QuantityCounter = createSlice({
//     name:'QCounter',
//     initialState:{
//         items:[],
//         // quantity:1,
//         maxValue: 20,
//     },
//     reducers:{
//         pushIds: (state,action) => {
//             const existingItem = state.items.find(item => item.id === action.payload);
//             if (!existingItem) {
//               state.items.push({ id: action.payload, quantity: 1 })
//             }
//         },
//         increaseInAddedProductCounter: (state,action) => {
//             const item = state.items.find(item => item.id == action.payload);
//             if(item){
//                 item.quantity +=1;
//             }
//         },
//         decreaseInAddedProductCounter: (state) => {
//             const item = state.items.find(item => item.id == action.payload);
//             if(item){
//                 if(item.quantity <= 1){
//                     alert("Use delete button to remove item");
//                 }
//                 else{
//                     item.quantity -= 1;
//                 }
//             }
//         },
//     }
// });
export const {increaseInAddedProductCounter,decreaseInAddedProductCounter } =
 QuantityCounter.actions;
export default QuantityCounter.reducer;