import { Button, Divider } from "@mantine/core";
import React, { FC } from "react";
import { Colors } from "../constants";
import { GradientButton } from "../../ui";

const CreateMagnetogramCard: FC = () => {
    return (
        <div className="">
            {/* <h1>Hi</h1>
            <Divider my="sm" />
            <Button style={{ marginTop: 15 }} fullWidth >Подробнее</Button> */}
            <GradientButton>Создать</GradientButton>
        </div>
    )
}
export default CreateMagnetogramCard;