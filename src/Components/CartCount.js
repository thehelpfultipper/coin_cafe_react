import { useState, useContext, useEffect } from 'react';

import CartContext from '../Context/cart-context'; 

import s from './CartCount.module.scss';

const CartCount = ({count, onRemoveFromCart, onAddToCart}) => {
    // let [count, setCount] = useState(0);

    // const handleRemItem = (e) => {
    //     if (count === 0) return;

    //     setCount( countState => countState - 1);
    //     onClick(count);
    // }

    // const handleAddItem = () => {
    //     setCount( countState => countState + 1);
    //     onClick(count);
    // } 

    return (
        <div>
            <button 
                type='button' 
                className={`${s.cartBtn} ${s.rem}`} 
                onClick={onRemoveFromCart}
            >&#8722;</button>
            <span className={s.count}>{count}</span>
            <button 
                type='button' 
                className={`${s.cartBtn} ${s.add}`} 
                onClick={onAddToCart}
            >&#43;</button>
        </div>
    )
}

export default CartCount;