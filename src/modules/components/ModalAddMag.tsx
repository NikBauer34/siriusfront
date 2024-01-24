import React, { FC, ReactNode } from 'react';
import { Modal } from '@mantine/core';
import '../../ui/styles/modalStyles/modalHeader.css';
interface modalprops {
    title?: string;
    children?: ReactNode;
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: () => void;
    withCloseButton?: boolean;
}

const ModalAddMag: FC<modalprops> = (props) => {

    return (
        <Modal
            opened={props.opened}
            centered
            withCloseButton={props.withCloseButton}
            onClose={props.onClose}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <Modal.Header
                c={'white'}
                fw={700}
                bg={'linear-gradient(to right, rgb(37, 110, 212), rgb(210, 224, 255))'}
                className='modalHeader'
            >
                <Modal.Title>{props.title}</Modal.Title>
                <Modal.CloseButton style={{border:'0'}}/>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>


        </Modal>
    )
}

export default ModalAddMag;