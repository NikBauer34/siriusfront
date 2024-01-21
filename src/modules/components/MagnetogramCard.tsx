import { Divider, Button, Container } from "@mantine/core";
import React, { FC, useContext } from "react";
import { Colors } from "../constants";
import { useNavigate } from "react-router-dom";
import { MagnetogramResponse } from "../api/http/MagnetogramResponse";
import { Context } from "../../main";
interface MagnetogramCardProps {
    magnetogram: MagnetogramResponse
}
const MagnetogramCard: FC<MagnetogramCardProps> = (props) => {
    const navigate = useNavigate()
    const {page} = useContext(Context)
    const onButtonClick = (magnetogram_id: string) => {
        page.setLoading(true)
        navigate(`/markup?id=${magnetogram_id}&i=0`)
        page.setLoading(false)
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