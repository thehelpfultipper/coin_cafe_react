import { useEffect, useState } from 'react';

import MenuItem from './MenuItem';

import s from './Menu.module.scss';

let URL = 'https://thehelpfultipper.github.io/coin_cafe_react/coffee.json';

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
        </div>
    )
}


export default Menu;