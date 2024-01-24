import { Button, Divider } from "@mantine/core";
import React, { FC, useContext } from "react";
import { Colors } from "../constants";
import { GradientButton } from "../../ui";
import { useDisclosure } from "@mantine/hooks";
import { Context } from "../../main";
import { ModalAddMag } from ".";
import MagnetogramCard from "./MagnetogramCard";
interface CreateMagnetogramCardProps {
    pipe_id: string
}
const CreateMagnetogramCard: FC<CreateMagnetogramCardProps> = ({ pipe_id }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const { magnetogram } = useContext(Context)
    const onModalConfirmed = async (title: string, file: File | null) => {
        const formdata = new FormData()
        formdata.append("pipe_id", pipe_id)
        formdata.append("version", "1.0.0")
        formdata.append("title", title)
        if (file != null) {
            formdata.append("file", file)
        }
        const response = await magnetogram.createMagnetogram(formdata)
        console.log(response)
        close()
    }
    return (
        <>
            <div>
                {/* <MagnetogramCard /> */}
                <GradientButton onClick={open}>Создать</GradientButton>
            </div>
            <ModalAddMag withCloseButton={false} title="Создать новую магнитограмму" opened={opened} onClose={close} onModalConfirmed={onModalConfirmed} />
        </>
    )
}
export default CreateMagnetogramCard;