import { Modal, Text, Button } from "@mantine/core";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
interface YMapModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: () => void;
}
const YMapModal: FC<YMapModalProps> = (props) => {
    const navigate = useNavigate()
    const onModalConfirmed = () => {
        props.onModalConfirmed()
        navigate('/marking')
    }
    return (
        <Modal opened={props.opened} onClose={props.onClose} transitionProps={{ transition: 'rotate-left' }}>
            <Text>Добавить новую трубу</Text>
            <Button onClick={props.onModalConfirmed}>Добавить</Button>
        </Modal>
    )
}
export default YMapModal
// TODO: Постараться сделать так, что если эта труба уже пренадлежит тебе,
//то ты получаешь другую модалку