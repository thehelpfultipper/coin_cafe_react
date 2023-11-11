import s from './CartCount.module.scss';

const CartCount = ({count, onAddToCart, onRemoveFromCart}) => {
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