import { useEffect, useState } from 'react';

import MenuItem from './MenuItem';

import s from './Menu.module.scss';

let apiUrls = [
    'https://api.sampleapis.com/coffee/hot',
    'https://api.sampleapis.com/coffee/iced'
]

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
                return <MenuItem data={item} key={i} />
            })}
        </div>
    )
}


export default Menu;