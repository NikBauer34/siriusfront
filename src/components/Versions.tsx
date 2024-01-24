import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramVersion, MagnetogramVersionsData } from "../modules/api";
import { List, VersionCard, VersionsList } from "../modules/components";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { version } from "os";
import { Checkbox } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CreateVersionModal from "../modules/components/CreateVersionModal";
const Versions: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {magnetogram} = useContext(Context)
    const [data, setData] = useState<MagnetogramVersion[] | null>(null)
    const [opened, { open, close }] = useDisclosure(false)
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
    const onModalConfirmed = async(file: File | null, version: string) => {
        const formdata = new FormData()
        formdata.append("id", searchParams.get("id") || '0')
        formdata.append("version", version)
        if (file != null) {
            formdata.append("file", file)
        }
        const response = await magnetogram.createMagnetogramVersion(formdata)
        console.log(response)
    } 
    let isSelected = useMemo(() => selection, [selection])
    let sel = true
    return (
        <>
            <div>
                <h1 onClick={open}>Создать разметку</h1>
                {/* {isSelected
                ? <h1 onClick={() => setSelection(true)}>Сравнить</h1>
                : <h1>Выбрать</h1>
                } */}
                <VersionsList selection={selection} setSelection={setSelection} data={data}/>
                <CreateVersionModal opened={opened} onClose={close} onModalConfirmed={(file: File | null, version: string) => onModalConfirmed(file, version)}/>
            </div>
        </>
    )
}
export default Versions