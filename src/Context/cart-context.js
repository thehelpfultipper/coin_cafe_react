import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
});

// const cartReducer = (state, action) => {
//   if(action.type === 'ADD') {
//     const updatedItems = [...state.items, action.item];
//     const updatedAmount = state.totalAmount + action.item.price * action.item.count;
//     return {
//       items: updatedItems,
//       totalAmount: updatedAmount
//     }
//   }
//   return defaultCartState;
// }

// const CartContextProvider = ({ children }) => {
//   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

//   const addItemToCartHandler = item => {
//     // @item is { title, price, count }
//     dispatchCartAction({ type: 'ADD', item });
//   };

//   const removeItemFromCartHandler = id => {
//     dispatchCartAction({ type: 'REMOVE', id });
//   };

//   let cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler
//   }

//   return (
//     <CartContext.Provider
//       value={cartContext}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

export default CartContext;