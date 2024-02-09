import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            //mutating the state at here
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearItems:(state,action)=>{
            state.items.length ==0
        }
    }
})
export const {addItems,removeItem,clearItems} = cartSlice.actions;
export default cartSlice.reducer;