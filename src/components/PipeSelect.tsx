import React, { FC, useContext } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";

const PipeSelect: FC = () => {
    const {pipe} = useContext(Context)
    let PipeList: string[] = pipe.pipes.map(function (obj) {
        return obj.title
    })
    return (
        <DefaultSelect label="Выберите трубу" data={PipeList} onClick={(value: string) => pipe.setSelectedPipe(value)}/>
    )
}
export default PipeSelect