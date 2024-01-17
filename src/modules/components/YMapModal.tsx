import { Modal, Text, Button } from "@mantine/core";
import React, { FC } from "react";
interface YMapModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: () => void;
}
const YMapModal: FC<YMapModalProps> = (props) => {
    return (
        <Modal opened={props.opened} onClose={props.onClose} transitionProps={{ transition: 'rotate-left' }}>
            <Text>Добавить новую трубу</Text>
            <Button onClick={props.onModalConfirmed}>Добавить</Button>
        </Modal>
    )
}
export default YMapModal