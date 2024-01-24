import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramVersion, MagnetogramVersionsData } from "../modules/api";
import { List, VersionCard, VersionsList } from "../modules/components";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { version } from "os";
import { Checkbox } from "@mantine/core";
const Versions: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {magnetogram} = useContext(Context)
    const [data, setData] = useState<MagnetogramVersion[] | null>(null)
    let [selection, setSelection] = useState(false)
    let [checkboxvalue, setCheckboxvalue] = useState<string[]>([])
    useEffect(() => {
        getVersions()
    }, [])
    const getVersions = async() => {
        const response = await magnetogram.getMagnetogramVersionsData(searchParams.get("id") || '0')
        console.log(response)
        setData(response.info)
    }
    let isSelected = useMemo(() => selection, [selection])
    let sel = true
    return (
        <>
            <div>
                <h1>Создать разметку</h1>
                {/* {isSelected
                ? <h1 onClick={() => setSelection(true)}>Сравнить</h1>
                : <h1>Выбрать</h1>
                } */}
                <VersionsList selection={selection} setSelection={setSelection} data={data}/>
            </div>
        </>
    )
}
export default Versions