import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../stores/cartSlice';

const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;