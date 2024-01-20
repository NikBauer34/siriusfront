import { Divider, Button } from "@mantine/core";
import React, { FC } from "react";
import { Colors } from "../constants";
import { useNavigate } from "react-router-dom";
import { MagnetogramResponse } from "../api/http/MagnetogramResponse";
interface MagnetogramCardProps {
    magnetogram: MagnetogramResponse
}
const MagnetogramCard: FC<MagnetogramCardProps> = (props) => {
    const navigate = useNavigate()
    const onButtonClick = (magnetogram_id: string) => {
        navigate(`/magnetogram?magnetogram=${magnetogram_id}&i=0`)
    }
    return (
        <div className="">
            <h1>{props.magnetogram.title}</h1>
            <Divider my="sm" color={Colors.gradientFirst}/>
            <Button style={{marginTop: 15}} fullWidth onClick={() => onButtonClick(props.magnetogram._id)}>Подробнее</Button>
        </div>
    )
}
export default MagnetogramCard