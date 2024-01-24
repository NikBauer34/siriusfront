import React, { FC, ReactNode } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

interface modalprops {
    title?: string;
    children?: ReactNode;
}

const ModalAddMag: FC<modalprops> = (props) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Modal
            opened={opened}
            onClose={close}
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