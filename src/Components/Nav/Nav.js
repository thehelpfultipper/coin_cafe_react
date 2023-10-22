
import Cart from './Cart';

import s from './Nav.module.scss';

const Nav = () => {
    return(
        <div className={s.container}>
            <div className={s.nav_items}>
                <div className={s.logo}>
                    <span>coin café</span>
                </div>
                <Cart />
            </div>
        </div>
    )
}


export default Nav;