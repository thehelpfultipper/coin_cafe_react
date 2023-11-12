import { useEffect, useState } from 'react';

import MenuItem from './MenuItem';
import ScrollToTop from './ScrollToTop';


import s from './Menu.module.scss';

let URL = 'https://thehelpfultipper.github.io/coffee_data_custom/coffee.json';

const Menu = () => {
    let [data, setData] = useState([]);

    const getCoffeeData = async () => {
        try {
            const resp = await fetch(URL);
            const data = await resp.json();
           
            setData(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCoffeeData(); // desc, id, img, title 
    }, []);

    return (
        <div className={s.container}>
            {data.map((item, i) => {
                return <MenuItem data={item} id={i} key={i} />
            })}
            <ScrollToTop />
        </div>
    )
}


export default Menu;