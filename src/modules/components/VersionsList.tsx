import React, { FC, SetStateAction, useMemo, useState } from "react";
import { MagnetogramVersion } from "../api";
import { Checkbox } from "@mantine/core";
import VersionCard from "./VersionCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { randomId } from "@mantine/hooks";
interface VersionList {
    selection: boolean
    setSelection: React.Dispatch<SetStateAction<boolean>>
    data: MagnetogramVersion[] | null
}
const VersionsList: FC<VersionList> = (props) => {
    let [checkboxvalue, setCheckboxvalue] = useState<string[]>([])
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    let [indeterminate, setIndeterminate] = useState(false)
    const HandleComparison = () => {
        navigate(`/comparison?id=${searchParams.get("id") || '0'}&first_version=${Number(checkboxvalue[0])}&second_version=${Number(checkboxvalue[1])}`)
    }
   
    return (
        <>
            {props.selection
            ? <h1 onClick={HandleComparison}>Сравнить</h1>
            : <h1 onClick={() => props.setSelection(true)}>Выбрать</h1>
            }
            {props.selection
            ? <Checkbox.Group value={checkboxvalue} onChange={setCheckboxvalue} >
                {props.data?.map((markup_version, index) =>
                    <div key={randomId()}>
                    <VersionCard _id={searchParams.get("id") || '0'} i={index} date={markup_version.date} key={randomId()}/>
                    <Checkbox value={String(index)} variant="outline" indeterminate={indeterminate} key={randomId()}>
                        
                    </Checkbox>
                    </div>
                )}
            </Checkbox.Group>
            : props.data?.map((markup_version, index) => 
            <VersionCard _id={searchParams.get("id") || '0'} i={index} date={markup_version.date} key={randomId()}/>
            )
            }
        </>
    )
}
export default VersionsList