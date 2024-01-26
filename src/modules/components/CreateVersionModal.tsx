import React, { FC, useContext, useState } from "react";
import VersionModalForm from "./VersionModalForm";
import { ModalAddMag } from ".";
import { MagnetogramVersion } from "../api";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../main";
import { Loader, LoadingOverlay } from "@mantine/core";

interface CreateMarkupModalProps {
    opened: boolean;
    onClose: () => void;
    setItems: (res: MagnetogramVersion) => void
    onModalConfirmed: (file: File | null, version: string) => void;
}
const CreateVersionModal: FC<CreateMarkupModalProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {magnetogram} = useContext(Context)
    const [isLoading, setLoading] = useState(false)
    const onModalConfirmed = async (file: File | null, version: string) => {
        const formdata = new FormData()
        formdata.append("id", searchParams.get("id") || '0')
        formdata.append("version", version)
        if (file != null) {
            formdata.append("file", file)
        }
        setLoading(true)
        const response = await magnetogram.createMagnetogramVersion(formdata)
        setLoading(false)
        props.setItems(response)
        props.onClose()
        console.log(response)
        
    }
    return (
        <ModalAddMag
            withCloseButton={false}
            opened={props.opened}
            onClose={props.onClose}
            title="Создать новую версию"
            onModalConfirmed={() => false}
        >
            <LoadingOverlay visible={isLoading} loaderProps={{children: <Loader/>}}/>
            {/* <MarkupModalForm onSubmit={(title, file) => props.onModalConfirmed(title, file)}/> */}
            <VersionModalForm onSubmit={(file: File | null, version: string) => onModalConfirmed(file, version)} />
        </ModalAddMag>
    )
}
export default CreateVersionModal;