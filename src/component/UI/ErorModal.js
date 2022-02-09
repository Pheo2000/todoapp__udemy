import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErorrModal.module.css'

import ReactDom from 'react-dom'
const Backrrop = props => {
    return (
        //  dòng này là trả về cái lớp modal 
        <div className={classes.backdrop}
            onClick={props.Confirm}>
        </div>
    )
}


const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header>
                <h2
                    className={classes.header}>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p >{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.Confirm}>OKAY</Button>
            </footer>
        </Card>
    )
}
export default function ErorModal(props) {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backrrop onClick={props.Confirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(<ModalOverlay title={props.title}
                message={props.message}
                Confirm={props.Confirm}
            />,
                document.getElementById('overlay-root')
            )
            }
        </React.Fragment >
    )
}
// suy cho  cùng thì cái thăng ReactDom.createPrtal là để di chuyển dom vào 1 thành phần 
// khác gồm  2 đối số 