import React, { FC, useContext, useMemo, useState } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";
import { toJS } from "mobx";
import { MapResponse } from "../modules/api";
import Statistics from "./Statistics";
import Magnetograms from "./Magnetograms";
interface PipeSelectProps {
    mode: 'pipe' | 'magnetogram'
}
const PipeSelect: FC<PipeSelectProps> = ({mode}) => {
    const { pipe } = useContext(Context);
    const [selectedPipeValue, setSelectedPipeValue] = useState<MapResponse | null>({} as MapResponse)

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
    const onSelected = (value: string) => {
        let selectedPipe = pipe.userpipes.find(obj => obj.title == value)
        if (selectedPipe) {
            setSelectedPipeValue(toJS(selectedPipe))
        }
    }
    return (
        <>
            <DefaultSelect label="Выберите трубу" data={[...new Set(PipeList)]} onClick={(value: string) => onSelected(value)} />
            {selectedPipeValue != null
            ? Object.keys(selectedPipeValue).length != 0  ? mode == 'pipe' ? <Statistics pipe_id={selectedPipeValue._id}/> : <Magnetograms pipe_id={selectedPipeValue._id}/> : <h3>Пока ничего не выбрано</h3>
            : <h1>Ничего</h1>
            }
        </>
    )
}
export default PipeSelect