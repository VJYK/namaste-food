import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanilla(older) Redux ==> Don't mutate the state, returning also mandatory
            //const newState = [...state]
            //newState.items.push(action.payload)
            //return newState

            //In RTK
            //mutating the state at here, returning is not mandatory
            //Redux using Immerse for mutate state.
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

export const {addItem,removeItem,clearItems} = cartSlice.actions;
export default cartSlice.reducer;