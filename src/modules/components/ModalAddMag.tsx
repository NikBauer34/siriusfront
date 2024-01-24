import React, { FC, ReactNode } from 'react';
import { Modal } from '@mantine/core';

interface modalprops {
    title?: string;
    children?: ReactNode;
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: () => void;
}

const ModalAddMag: FC<modalprops> = (props) => {

    return (
        <Modal
            opened={props.opened}
            onClose={props.onClose}
            title={props.title}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            {props.children}

        </Modal>
    )
}

export default ModalAddMag;