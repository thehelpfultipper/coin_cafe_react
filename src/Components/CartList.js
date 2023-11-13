import { useContext } from 'react';

import Modal from './Modal';
import CartContext from '../Context/cart-context';
import CartCount from './CartCount';

import s from './CartList.module.scss';

const CartList = () => {
    let { items, totalAmount, addItem, removeItem } = useContext(CartContext);

    return (
        <Modal>
            <div className={s.items_wrapper}>
                <ul>
                    {
                        items.map( (item, i) => {
                            let itemTotalAmnt = (item.count * item.price).toFixed(2);
                            let id = item.id;

                            const addItemHandler = () => {
                                addItem(item);
                            };

                            const rmvItemHandler = () => {
                                removeItem(id);
                            }

                            return(
                                <li key={i} className={s.cartlist_item}>
                                    <span className={s.cartlist_img}><img src={item.image} alt={item.title} /></span>
                                    <span className={s.cartlist_content}>
                                        <span>{item.title}</span><br />
                                        <span>{item.count} &times; ${item.price}</span>
                                    </span>
                                    <span className={s.cartlist_action}>
                                        <span>${itemTotalAmnt}</span><br />
                                        <CartCount 
                                            count={item.count}
                                            onAddToCart={addItemHandler}
                                            onRemoveFromCart={rmvItemHandler}
                                        /></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
           <div className={s.total_wrapper}>
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
           </div>
        </Modal>
    )
}

export default CartList;