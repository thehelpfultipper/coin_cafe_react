
import Nav from './Nav/Nav';

import s from './Header.module.scss';

const Header = () => {
    return(
        <div className={s.container}>
            <Nav />
        </div>
    )
}


export default Header;