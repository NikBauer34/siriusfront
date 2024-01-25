import React, { FC } from "react";
import VersionModalForm from "./VersionModalForm";
import { ModalAddMag } from ".";
interface CreateMarkupModalProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: (file: File | null, version: string) => void;
}
const CreateVersionModal: FC<CreateMarkupModalProps> = (props) => {
    return (
        <ModalAddMag withCloseButton={false} opened={props.opened} onClose={props.onClose} title="Создать новую версию" onModalConfirmed={() => false}>
            {/* <MarkupModalForm onSubmit={(title, file) => props.onModalConfirmed(title, file)}/> */}
            <VersionModalForm onSubmit={(file: File | null, version: string) => props.onModalConfirmed(file, version)} />
        </ModalAddMag>
    )
}
export default CreateVersionModal;