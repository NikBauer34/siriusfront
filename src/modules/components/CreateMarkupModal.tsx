import { Modal } from "@mantine/core";
import React, { FC } from "react";
interface CreateMarkupModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: () => void;
}
const CreateMarkupModal: FC<CreateMarkupModalProps> = (props) => {
    return (
        <Modal opened={props.opened} onClose={props.onClose}>

        </Modal>
    )
}