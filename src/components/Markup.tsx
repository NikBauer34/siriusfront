import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramMarkupData } from "../modules/api";
import { Loader } from "@mantine/core";
import { GetSquareAmount } from "../modules/helpers";
import { List } from "../modules/components";
import { FilledSquare } from "../ui";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
export const API_URL = 'http://localhost:4000'
const Markup: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let ref = useRef(null);
    let navigate = useNavigate()
    const { magnetogram } = useContext(Context);
    const [data, setData] = useState<MagnetogramMarkupData | null>(null);
    let [i, setI] = useState(0);
    useEffect(() => {
        getMarkup();
    }, [])
    const getMarkup = async () => {
        const response = await magnetogram.getMagnetogramMarkupData(searchParams.get("id") || '0', Number(searchParams.get("i")) || 0)
        // const response = [0, 1, 0, 1, 0, 1, 0, 0, 1]
        console.log('response:')
        console.log(response)
        setData(response);
    }
    const getDataMatrix = () => {
        if (data?.markup != undefined) {
            let size = GetSquareAmount(ref, 5, 2, 2)
            console.log(size)
            let subarray = []
            while (data.markup.length) {
                subarray.push(data.markup.splice(0, size))
            }
            console.log(subarray)
            return subarray
        }
        return []
    }
    let dataMatrix = useMemo(getDataMatrix, [data]);
    let currentArray = useMemo(() => dataMatrix[i], [dataMatrix, i]);
    console.log('datamatrix')
    console.log(dataMatrix)
    console.log('currentarray')
    console.log(currentArray)
    console.log('i: ' + i)
    useEffect(() => {
        console.log('i changed: ' + i)
    }, [i])
    if (magnetogram.isLoading) {
        return <Loader h={300} />
    }
    if (magnetogram.isError) {
        return <h1>Ошибка</h1>
    }
    console.log('dataMatrix[i++]')
    console.log(dataMatrix[i++])
    return (
        <div
            ref={ref}
            style={{
                width: "100vh",
                height: "100vh",
                color: '#4a9dce',
                margin: 'auto',
                marginTop: "30%",
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center'
            }}>
            <List
                items={currentArray}
                notFoundMessage='Магнитограмма не найдена'
                renderItem={(square: number) => <FilledSquare key={randomId()} background={square == 1 ? 'red' : '#b6b6b6'} />}
            />
            {i > 1 &&
                <IconChevronLeft onClick={() => setI(i-4)}>Влево</IconChevronLeft>
            }
            {dataMatrix[i++] != undefined &&
                <IconChevronRight onClick={() => setI(i++)}>Вправо</IconChevronRight>
            }
            <div style={{
                height: 'max-content',
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                margin: '25px'
            }}>
                <IconDownload />
                <span style={{ fontSize: '20px' }} onClick={() => window.open(`${API_URL}/${data?.data_table}`)}>Скачать таблицу по данной магнитограмме</span>
            </div>
            <Button onClick={() => navigate(`/versions?id=${searchParams.get("id")}`)}>Посмотреть все версии</Button>
        </div>
    )
}
export default Markup;