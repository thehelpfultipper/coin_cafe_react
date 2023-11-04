import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const Backdrop = () => <div className={s.backdrop}></div>;

const OverlayContent = (props) => {
    return (
        <div className={s.overlay}>
            {props.children}
        </div>
    )
}


const Modal = (props) => {
    return(
        <Fragment>
            {createPortal(<Backdrop />, document.querySelector('#overlays-root'))}
            {createPortal((<OverlayContent>{props.children}</OverlayContent>), document.querySelector('#overlays-root'))}
        </Fragment>
    )
}

export default Modal;