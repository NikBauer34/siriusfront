import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";
import { toJS } from "mobx";

const PipeSelect: FC = () => {
    const { pipe } = useContext(Context);

    useEffect(() => {
        console.log('pipe select user pipes')
        console.log(toJS(pipe.userpipes))
    }, [pipe.userpipes])
    const getPipeList = () => {
        if (pipe.userpipes == null || pipe.userpipes == undefined) { 
            return null
        } else {
            let PipeList = pipe.userpipes.map(obj => obj.title)
            return PipeList
        }
    }
    let PipeList: string[] | null = null
    if (pipe.userpipes != null) {
        PipeList = useMemo(getPipeList, [pipe.userpipes])
    }
    console.log('Pipelist')
    console.log(PipeList)
    const onSelected = (value: string) => {
        let selectedPipe = pipe.userpipes.find(obj => obj.title == value)
        if (selectedPipe) {
            console.log('selected value')
            pipe.setSelectedPipe(selectedPipe)
            console.log(toJS(pipe.selectedpipe))
        }
    }
    return (
        <DefaultSelect label="Выберите трубу" data={[...new Set(PipeList)]} onClick={(value: string) => onSelected(value)} />
    )
}
export default PipeSelect