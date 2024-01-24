import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramMarkupData } from "../modules/api";
import { Loader } from "@mantine/core";
import { GetSquareAmount } from "../modules/helpers";
import { List } from "../modules/components";
import { FilledSquare } from "../ui";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
const Markup: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let ref = useRef(null);
    const {magnetogram} = useContext(Context);
    const [data, setData] = useState<MagnetogramMarkupData | null>(null);
    let [i, setI] = useState(0);
    useEffect(() => {
        getMarkup();
    }, [])
    const getMarkup = async() => {
//        const response = await magnetogram.getMagnetogramMarkupData(searchParams.get("id") || '0', Number(searchParams.get("i")) || 0)
        // const response = [0, 1, 0, 1, 0, 1, 0, 0, 1]
        let response = {} as MagnetogramMarkupData
        response.markup = [0, 1, 0, 1, 0, 1, 0, 0, 1]
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
    if (magnetogram.isLoading) {
        return <Loader h={300} />
    }
    if (magnetogram.isError) {
        return <h1>Ошибка</h1>
    }
    return (
        <div ref={ref} style={{width: "100%", height: "100%", color:'#4a9dce'}}>
            <List items={currentArray} notFoundMessage='Разметка не найдена' renderItem={(square: number) => <FilledSquare key={randomId()} background={square == 1 ? 'red' : 'grey'}/>}/>
            {i != 0 &&
                <IconChevronLeft onClick={() => setI(i--)}>Влево</IconChevronLeft>
            }
            {dataMatrix[i++] == undefined &&
                <IconChevronRight onClick={() => setI(i++)}>Вправо</IconChevronRight>
            }
        </div>
    )
}
export default Markup;