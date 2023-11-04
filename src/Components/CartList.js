import { useContext } from 'react';

import Modal from './Modal';
import CartContext from '../Context/cart-context';

import s from './CartList.module.css';

const CartList = () => {
    let { items, totalAmount } = useContext(CartContext);
    return (
        <Modal>
           <div className={s.total_wrapper}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
           </div>
        </Modal>
    )
}

export default CartList;