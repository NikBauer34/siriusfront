import React, { FC, useContext, useEffect, useState } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";
import { toJS } from "mobx";
import { MapResponse } from "../modules/api";

const PipeSelect: FC = () => {
    const {pipe} = useContext(Context)
    const [selectedPipes, setSelectedPipes] = useState<MapResponse[] | null>(null)
    useEffect(() => {
        getUserPipes()
    }, [])
    const getUserPipes = async() => {
        let data = await pipe.getUserPipes()
        setSelectedPipes(data)
    }
    let PipeList: string[] = ['']
    if (selectedPipes != null) {
        PipeList = selectedPipes.map(obj => obj.title)
    }
    console.log('dfhsdfhsdfh')
    console.log(PipeList)
    const onSelected = (value: string) => {
        let selectedPipe = pipe.userpipes.find(obj => obj.title == value)
        if (selectedPipe) {
            pipe.setSelectedPipe(selectedPipe)
            console.log(toJS(pipe.selectedpipe))
        }
    }
    return (
        <DefaultSelect label="Выберите трубу" data={[...new Set(PipeList)]} onClick={(value: string) => onSelected(value)}/>
    )
}
export default PipeSelect