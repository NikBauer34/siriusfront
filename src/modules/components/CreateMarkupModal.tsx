import { Modal } from "@mantine/core";
import React, { FC } from "react";
import { Button } from "@mantine/core";
import MarkupModalForm from "./MarkupModalForm";
interface CreateMarkupModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: (value: string, file: File | null) => void;
}
const CreateMarkupModal: FC<CreateMarkupModalProps> = (props) => {
    return (
        <Modal opened={props.opened} onClose={props.onClose} title="Создать новую магнитограмму" centered>
            <MarkupModalForm onSubmit={(title, file) => props.onModalConfirmed(title, file)}/>
        </Modal>
    )
}
export default CreateMarkupModal