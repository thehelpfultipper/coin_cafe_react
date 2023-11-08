
import s from './ScrollToTop.module.scss';

const ScrollToTop = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={s.scroll_wrapper}>
            <button 
                onClick={handleScroll} 
                type='button'
                className={s.scroll_btn}
            >&#94;</button>
            <span>Scroll to top</span>
        </div>
    )
}

export default ScrollToTop;