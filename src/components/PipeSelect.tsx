import React, { FC, useContext } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";
import { toJS } from "mobx";

const PipeSelect: FC = () => {
    const {pipe} = useContext(Context)
    console.log('---------')
    console.log(toJS(pipe.userpipes))
    let PipeList = pipe.userpipes.map(obj => obj.title)
    const onSelected = (value: string) => {
        let selectedPipe = pipe.userpipes.find(obj => obj.title == value)
        if (selectedPipe) {
            pipe.setSelectedPipe(selectedPipe)
        }
    }
    return (
        <DefaultSelect label="Выберите трубу" data={PipeList} onClick={(value: string) => onSelected(value)}/>
    )
}
export default PipeSelect