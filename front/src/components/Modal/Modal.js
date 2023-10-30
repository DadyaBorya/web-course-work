import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalView = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.setShow ? props.setShow(false) : setShow(false)
    };
    const handleShow = () => {
        props.setShow ? props.setShow(true) : setShow(true)
        props.setDefaultInstase()
    };

    return (
        <>
            <Button className={`${props.isHiddenButton && "visually-hidden"}`} variant="primary" onClick={handleShow}>
                {props.buttonOpenText}
            </Button>

            <Modal size="xl" show={props.show ? props.show : show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.headerText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.content}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {props.buttonCloseText}
                    </Button>
                    <Button variant="primary"
                            onClick={() => props.handleSubmit() ? (props.setShow ? props.setShow(false) : setShow(false)) : ""}>
                        {props.buttonSubmitText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalView;