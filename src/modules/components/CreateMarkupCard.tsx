import { Button, Divider } from "@mantine/core";
import React, { FC } from "react";
import { Colors } from "../constants";

const CreateMagnetogramCard: FC = () => {
    return (
        <div className="">
            {/* <h1>Hi</h1>
            <Divider my="sm" />
            <Button style={{ marginTop: 15 }} fullWidth >Подробнее</Button> */}
            <Button>Создать новую магнитограмму</Button>
        </div>
    )
}
export default CreateMagnetogramCard