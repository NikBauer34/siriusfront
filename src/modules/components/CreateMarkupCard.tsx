import { Button, Divider } from "@mantine/core";
import React, { FC } from "react";
import { Colors } from "../constants";
import { GradientButton } from "../../ui";
import { useDisclosure } from "@mantine/hooks";
import CreateMarkupModal from "./CreateMarkupModal";

const CreateMagnetogramCard: FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const onModalConfirmed = (value: string, file: File | null) => {
        console.log(value)
        console.log(file)
    }
    return (
        <>
            <div className="">
                {/* <h1>Hi</h1>
                <Divider my="sm" />
                <Button style={{ marginTop: 15 }} fullWidth >Подробнее</Button> */}
                <GradientButton onClick={open}>Создать</GradientButton>
            </div>
            <CreateMarkupModal opened={opened} onClose={close} onModalConfirmed={onModalConfirmed}/>
        </>
    )
}
export default CreateMagnetogramCard;