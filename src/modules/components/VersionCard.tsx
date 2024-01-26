import React, { FC, useContext } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
interface VersionCardProps {
    _id: string;
    i: number;
    date: Date;
    version: string;
}
const VersionCard: FC<VersionCardProps> = (props) => {
    const date = new Date(props.date)
    const { page } = useContext(Context)
    const navigate = useNavigate()
    const HandleClick = (_id: string, i: number) => {
        page.setLoading(true)
        navigate(`/markup?id=${_id}&i=${i}`)
        page.setLoading(false)
    }
    return (
        <div style={{ cursor: 'pointer' }} onClick={() => HandleClick(props._id, props.i)}>
            <h1>{props.i+1}</h1>
            <div>
                <span>ID: {props._id}</span>
                <div/>
                <span>Версия: {props.version}</span>
                <div/>
                <span>{`Дата поста: ${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`}</span>
            </div>
        </div>
    )
}
export default VersionCard;