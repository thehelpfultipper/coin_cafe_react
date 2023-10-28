import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultContext = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        let newItems;
        // Check if item exists
        let itemIndex = state.items.findIndex( item => item.id === action.data.id);
        let existingItem = state.items[itemIndex];
      
        // Update items array
        if(existingItem) {
            // Update only the count of the item
            let updatedItem = {
                ...existingItem,
                count: existingItem.count + action.data.count
            };
            newItems = [...state.items];
            newItems[itemIndex] = updatedItem; 
        } else {
            newItems = [...state.items, action.data];
        }
       
        let newAmount = state.totalAmount + (action.data.price * action.data.count);
        return {
            items: newItems,
            totalAmount: newAmount
        }
    }

    if(action.type === 'REMOVE') {
        
    }
    return defaultContext;
}

const CartContextProvider = ({children}) => {
    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultContext);

    const addToCartHandler = item => {
        cartDispatcher({type: 'ADD', data: item});
    }

    const removeFromCartHandler = id => {
        cartDispatcher({type: 'REMOVE', id});
    }

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        remItem: removeFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;