import React, { FC, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramVersion, MagnetogramVersionsData } from "../modules/api";
import { List, VersionCard } from "../modules/components";
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
    return (
        <>
            <div style={{display: 'flex'}}>
                <h1>Создать разметку</h1>
                {selection
                ? <button onClick={() => setSelection(true)}>Сравнить</button>
                : <button>Выбрать</button>
                }
            </div>
            {selection == false
            // ? <List items={data} renderItem={(item: MagnetogramVersion) => <VersionCard _id={searchParams.get("id") || '0'}/>}
            ? data?.map((markup_version, index) => 
                <VersionCard _id={searchParams.get("id") || '0'} i={index} date={markup_version.date}/>
            )
            : <Checkbox.Group value={checkboxvalue} onChange={setCheckboxvalue}>
                {data?.map((markup_version, index) =>
                    <Checkbox value={String(index)}>
                        <VersionCard _id={searchParams.get("id") || '0'} i={index} date={markup_version.date}/>
                    </Checkbox>
                )}
            </Checkbox.Group>
            }
        </>
    )
}