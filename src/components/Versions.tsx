import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramVersion } from "../modules/api";
import { VersionsList } from "../modules/components";
import { useDisclosure } from "@mantine/hooks";
import CreateVersionModal from "../modules/components/CreateVersionModal";
import '../ui/styles/mainDivSelect.css';
import { IconCirclePlus } from "@tabler/icons-react";



const Versions: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { magnetogram } = useContext(Context)
    const [data, setData] = useState<MagnetogramVersion[] | null>(null)
    const [opened, { open, close }] = useDisclosure(false)
    let [selection, setSelection] = useState(false)
    let [checkboxvalue, setCheckboxvalue] = useState<string[]>([])
    let navigate = useNavigate()
    useEffect(() => {
        getVersions()
    }, [])
    const getVersions = async () => {
        const response = await magnetogram.getMagnetogramVersionsData(searchParams.get("id") || '0')
        console.log(response)
        setData(response.info)
    }
    const onModalConfirmed = async (file: File | null, version: string) => {
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
        <div className="mainDivSelect">
            <div onClick={open} style={{ color: 'rgb(37, 135, 255)', display: 'flex', alignItems: 'center',cursor:'pointer' }}>
                <IconCirclePlus width={90} height={90} />
                <h1 >Создать новую версию магнитограммы</h1>
            </div>
            {/* {isSelected
                ? <h1 onClick={() => setSelection(true)}>Сравнить</h1>
                : <h1>Выбрать</h1>
                } */}
            <VersionsList selection={selection} setSelection={setSelection} data={data} />
            <CreateVersionModal opened={opened} onClose={close} onModalConfirmed={(file: File | null, version: string) => onModalConfirmed(file, version)} />
        </div>
    )
}
export default Versions;