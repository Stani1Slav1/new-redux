import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                dishId: action.playload.dish.id,
                quantity: action.payload.quantity
            })
        }

    }
})

export const getCartItems = state => state.dishes.cartItems;
export const { addItemToCart } = slice.actions;
export default slice.reducer;