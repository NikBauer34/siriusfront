import React, { FC, ReactNode } from 'react';
import { Modal } from '@mantine/core';
import '../../ui/styles/modalStyles/modalHeader.css';
// import MarkupModalForm from './MarkupModalForm';
interface modalprops {
    title?: string;
    children?: ReactNode;
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: (value: string, file: File | null) => void;
    withCloseButton?: boolean;
}

const ModalAddMag: FC<modalprops> = (props) => {

    return (
        <Modal
            padding={0}
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
                p={20}
                c={'white'}
                fw={700}
                bg={'linear-gradient(to right, rgb(37, 110, 212), rgb(210, 224, 255))'}
                className='modalHeader'
            >
                <Modal.Title>{props.title}</Modal.Title>
                <Modal.CloseButton style={{ border: '0' }} />
            </Modal.Header>
            <Modal.Body p={30}>
                {props.children}
            </Modal.Body>
        </Modal>
    )
}

export default ModalAddMag;