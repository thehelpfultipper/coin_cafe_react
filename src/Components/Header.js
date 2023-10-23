
import Nav from './Nav/Nav';

import s from './Header.module.scss';

const Header = () => {
    return(
        <div className={s.container}>
            <Nav />
            <div className={s.content}>
                <h1>Welcome to Coin Cafe, where every cup is a treasured moment.</h1>
                <p>Step inside and experience the currency of great taste, where we brew not just coffee but connections. Join us for a journey through flavors that enrich your senses, and savor the moments that make life priceless.</p>
            </div>
        </div>
    )
}


export default Header;