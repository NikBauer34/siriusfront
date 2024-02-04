import { FC, useContext, useState } from "react";
import MarkupModalForm from "./MarkupModalForm";
import { ModalAddMag } from ".";
import { Context } from "../../main";
import { Loader, LoadingOverlay } from "@mantine/core";
import { MagnetogramCreation } from "../api/http/MagnetogramResponse";

interface CreateModalMagProps {
    opened: boolean;
    onClose: () => void;
    setItems: (res: MagnetogramCreation) => void
    onModalConfirmed?: (title: string, file: File | null) => void;
    pipe_id: string
}
const CreateModalMag: FC<CreateModalMagProps> = (props) => {
    const {magnetogram} = useContext(Context)
    const [isLoading, setLoading] = useState(false)
    const onModalConfirmed = async (title: string, file: File | null) => {
        const formdata = new FormData()

        formdata.append("pipe_id", props.pipe_id)
        formdata.append("version", "1.0.0")
        formdata.append("title", title)

        if (file != null) {
            formdata.append("file", file)
        }
        setLoading(true)
        const response = await magnetogram.createMagnetogram(formdata)
        setLoading(false)
        props.setItems(response)
        props.onClose()
    }

    return (
        <ModalAddMag
            withCloseButton={false}
            opened={props.opened}
            onClose={props.onClose}
            title="Создать новую магнитограмму"
            onModalConfirmed={() => false}
        >
            <LoadingOverlay visible={isLoading} loaderProps={{children: <Loader/>}}/>
            {/* <MarkupModalForm onSubmit={(file, title) => props.onModalConfirmed(title, file)}/> */}
            <MarkupModalForm onSubmit={(title: string, file: File | null) => onModalConfirmed(title, file)} />
        </ModalAddMag>
    )
}
export default CreateModalMag;