
import s from './Menu.module.scss';

const generateRandomPrice = () => {
    let num = Math.floor(Math.random() * 890 + 100) // number between 100 - 890
    let price = (num / 100).toFixed(2);

    return price;
}

const getFirstSentence = (text) => {
    const sentences = text.match(/[^.!?]+[.!?]+/);
    
    return sentences ? sentences[0].trim() : text.trim();
}

const MenuItem = ({data}) => {
    getFirstSentence(data.description)
    return (
        <div className={s.wrapper}>
            <div className={s.desc}>
                <h3>{data.title}</h3>
                <p>{getFirstSentence(data.description)}</p>
            </div>
            <div className={s.price}>
                <span>${generateRandomPrice()}</span>
            </div>
        </div>
    )
}

export default MenuItem;