import { useEffect, useState } from 'react';

import MenuItem from './MenuItem';

import s from './Menu.module.scss';

let apiUrls = [
    'https://api.sampleapis.com/coffee/hot',
    'https://api.sampleapis.com/coffee/iced'
];

const generateRandomPrice = () => {
    let num = Math.floor(Math.random() * 890 + 100) // number between 100 - 890
    let price = (num / 100).toFixed(2);

    return price;
}

const Menu = () => {
    let [data, setData] = useState([]);

    const getCoffeeData = async () => {
        let allData = [];
        
        const responses = await Promise.all(apiUrls.map(url => fetch(url)));
        const data = await Promise.all(responses.map( resp => resp.json()));

        data.forEach( type => allData.push(...type));
        
        setData(allData);
    }

    useEffect( () => {
        getCoffeeData(); // desc, id, img, title 
    }, []);
    
    return (
        <div className={s.container}>
            {data.map( (item, i) => {
                let newItem = {...item, price: generateRandomPrice(), count: 1}
                return <MenuItem data={newItem} id={i} key={i} />
            })}
        </div>
    )
}


export default Menu;