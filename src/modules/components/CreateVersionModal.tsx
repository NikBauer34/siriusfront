import { Modal } from "@mantine/core";
import React, { FC } from "react";
import { Button } from "@mantine/core";
import VersionModalForm from "./VersionModalForm";
import { ModalAddMag } from ".";
interface CreateMarkupModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: (file: File | null, version: string) => void;
}
const CreateVersionModal: FC<CreateMarkupModalProps> = (props) => {
    return (
        <ModalAddMag opened={props.opened} onClose={props.onClose} title="Создать новую версию" onModalConfirmed={() => false}>
            {/* <MarkupModalForm onSubmit={(title, file) => props.onModalConfirmed(title, file)}/> */}
            <VersionModalForm onSubmit={(file: File | null, version: string) => props.onModalConfirmed(file, version)} />
        </ModalAddMag>
    )
}
export default CreateVersionModal