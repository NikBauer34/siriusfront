import { FC, useContext, useEffect, useMemo, useState } from "react";
import { DefaultSelect } from "../ui";
import { Context } from "../main";
import { toJS } from "mobx";
import { MapResponse } from "../modules/api";
import Statistics from "./Statistics";
import Magnetograms from "./Magnetograms";
// import { GetSquareAmount } from "../modules/helpers";
interface PipeSelectProps {
    mode: 'pipe' | 'magnetogram';
    className?: string;
    width: string;
    pipes?: MapResponse[]
}
const PipeSelect: FC<PipeSelectProps> = ({ mode, width }) => {
    const { pipe } = useContext(Context);
    const [selectedPipeValue, setSelectedPipeValue] = useState<MapResponse | null>({} as MapResponse)
    let PipeList: string[] | null = null
    useEffect(() => {
        pipe.checkPipes()
    }, [])
    const getPipeList = () => {
        if (pipe.userpipes == null || pipe.userpipes == undefined) {
            return null
        } else {
            let PipeList = pipe.userpipes.map(obj => obj.title)
            return PipeList
        }
    }
    if (pipe.userpipes != null) {
        PipeList = useMemo(getPipeList, [pipe.userpipes])
    }
    const onSelected = (value: string) => {
        let selectedPipe = pipe.userpipes.find(obj => obj.title == value)
        if (selectedPipe) {
            setSelectedPipeValue(toJS(selectedPipe))
            console.log(selectedPipeValue)
            console.log('onSelected')
        }
    }
    return (
        <div>
            {/* <div style={{height: 30, width: 30}} ref={ref}></div>
            <button onClick={() => console.log(GetSquareAmount(ref, 5, 1, 3))}>ClickMe</button> */}
            <DefaultSelect
                width={width}
                label="Выберите трубу"
                data={[...new Set(PipeList)]}
                onChange={(value: string) => onSelected(value)}
            />
            <>{selectedPipeValue != null
                ? mode == 'pipe'
                    ? <Statistics pipe_id={selectedPipeValue._id} />
                    : <Magnetograms pipe_id={selectedPipeValue._id} />
                : <h1>Ничего</h1>
            }</>
        </div>
    )
}
export default PipeSelect;