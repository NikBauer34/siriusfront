import React, { FC } from "react";
import MarkupModalForm from "./MarkupModalForm";
import { ModalAddMag } from ".";

interface CreateModalMagProps {
    opened: boolean;
    onClose: () => void;
    onModalConfirmed: (file: File | null, title: string) => void;
}
const CreateModalMag: FC<CreateModalMagProps> = (props) => {
    return (
        <ModalAddMag
            withCloseButton={false}
            opened={props.opened}
            onClose={props.onClose}
            title="Создать новую магнитограмму"
            onModalConfirmed={() => false}
        >
            {/* <MarkupModalForm onSubmit={(file, title) => props.onModalConfirmed(title, file)}/> */}
            <MarkupModalForm onSubmit={(title: string, file: File | null) => props.onModalConfirmed(file, title)} />
        </ModalAddMag>
    )
}
export default CreateModalMag;