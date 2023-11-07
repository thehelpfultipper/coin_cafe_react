import { useState, useContext, useEffect } from 'react';

import CartCount from './CartCount';
import CartContext from '../Context/cart-context'; 

import s from './MenuItem.module.scss';

const getFirstSentence = (text) => {
    const sentences = text.match(/[^.!?]+[.!?]+/);
    
    return sentences ? sentences[0].trim() : text.trim();
}

const MenuItem = ({data, id}) => {
    let [ count, setCount ] = useState(0); 
    let {addItem, removeItem} = useContext(CartContext);

    const addToCartHandler = (item=data) => {
        addItem(item);
        // Update item count in menu 
        setCount(prevCount => prevCount + 1);
    }
;
    const removeCartHandler = (id) => {
        removeItem(id);
        // Update item count in menu 
        setCount(prevCount => {
            if(prevCount === 0) return 0;
            return prevCount - 1;
        });
    }

    return (
        <div className={s.wrapper} id={id}>
            <div className={s.img}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={s.desc}>
                <h3>{data.title}</h3>
                <p>{getFirstSentence(data.description)}</p>
            </div>
            <div className={s.price}>
                <span>${data.price}</span>
                <CartCount 
                    count={count}
                    onAddToCart={addToCartHandler.bind(null, data)} 
                    onRemoveFromCart={removeCartHandler.bind(null, data.id)} 
                />
            </div>
        </div>
    )
}

export default MenuItem;