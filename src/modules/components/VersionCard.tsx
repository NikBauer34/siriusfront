import React, { FC, useContext } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
interface VersionCardProps {
    _id: string;
    i: number;
    date: Date
}
const VersionCard: FC<VersionCardProps> = (props) => {
    const { page } = useContext(Context)
    const navigate = useNavigate()
    const HandleClick = (_id: string, i: number) => {
        page.setLoading(true)
        navigate(`/markup?id=${_id}&i=${i}`)
        page.setLoading(false)
    }
    return (
        <div onClick={() => HandleClick(props._id, props.i)}>
            <h1>Hello</h1>
        </div>
    )
}
export default VersionCard