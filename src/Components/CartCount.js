import { useState } from 'react';

import s from './CartCount.module.scss';

const CartCount = () => {
    let [count, setCount] = useState(0);

    const handleRemItem = () => {
        if (count === 0) return;

        setCount( countState => countState - 1);
    }

    const handleAddItem = () => setCount( countState => countState + 1);

    return (
        <div>
            <button type='button' className={`${s.cartBtn} ${s.rem}`} onClick={handleRemItem}>&#43;</button>
            <span className={s.count}>{count}</span>
            <button type='button' className={`${s.cartBtn} ${s.add}`} onClick={handleAddItem}>&#8722;</button>
        </div>
    )
}

export default CartCount;