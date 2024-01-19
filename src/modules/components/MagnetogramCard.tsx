import { Divider, Button } from "@mantine/core";
import React, { FC } from "react";
import { Colors } from "../constants";
import { useNavigate } from "react-router-dom";

const MagnetogramCard: FC<MagnetogramResponse> = (props) => {
    const navigate = useNavigate()
    const onButtonClick = (magnetogram_id: string) => {
        navigate(`/magnetogram?magnetogram=${magnetogram_id}`)
    }
    return (
        <div className="">
            <h1>{props.title}</h1>
            <Divider my="sm" color={Colors.gradientFirst}/>
            <Button style={{marginTop: 15}} fullWidth onClick={() => onButtonClick(props._id)}>Подробнее</Button>
        </div>
    )
}