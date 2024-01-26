import React, { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramVersionsComparison } from "../modules/api/index";
import { GetSquareAmount } from "../modules/helpers";
import { List } from "../modules/components";
import { TriangleSquare } from "../ui";
import { Loader } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import memo from '../img/memo.png';

// import { GetSquareAmount } from "../modules/helpers";

const Comparison: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    let ref = useRef(null)
    const { magnetogram } = useContext(Context)
    const [data, setData] = useState<MagnetogramVersionsComparison | null>(null)
    let [i, setI] = useState(0)
    useEffect(() => {
        getMarkup()
    }, [])
    const getMarkup = async () => {
        const response = await magnetogram.getMagnetogramVersionsComparison(searchParams.get("id") || '0', Number(searchParams.get("first_version")), Number(searchParams.get("second_version")))
        console.log(response)
        setData(response)
    }
    const getDataMatrix = () => {
        if (data?.first_version.markup != undefined) {
            let size = GetSquareAmount(ref, 5, 2, 2) * 2
            console.log(size)
            let subarray = []
            while (data.first_version.markup.length) {
                subarray.push([...data.first_version.markup.splice(0, size), ...data.second_version.markup.splice(0, size)])
            }
            console.log(subarray)
            return subarray
        }
        return []
    }
    const getCurrentArray = () => {
        if (dataMatrix[i++] != undefined) {
            let size = 2
            let subarray = []
            while (dataMatrix[i].length) {
                console.log('datamaz[i]')
                console.log(dataMatrix[i])
                subarray.push(dataMatrix[i].splice(0, size))
            }
            console.log(subarray)
            return subarray
        }
        return []
    }
    let dataMatrix = useMemo(getDataMatrix, [data])
    let currentArray = useMemo(getCurrentArray, [dataMatrix, i])
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
        // <div ref={ref} style={{ width: "100%", height: "100%", marginTop: '90px' }}>
        <div ref={ref} style={{
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
            <List items={currentArray} notFoundMessage='Не долистали до конца' renderItem={(triangle_square: number[]) => <TriangleSquare key={randomId()} firstTriangle={`10px solid ${triangle_square[0] == 1 ? 'red' : 'grey'}`} secondTriangle={`10px solid ${triangle_square[1] == 1 ? 'red' : 'grey'}`} />} />
            <div>
                {i > 1 &&
                    <IconChevronLeft
                        style={{
                            color: '#4282ea',
                            width: '50px',
                            height: '50px'
                        }}
                        onClick={() => setI(i - 4)}
                    >Влево</IconChevronLeft>
                }
                {dataMatrix[i++] != undefined &&
                    <IconChevronRight
                        style={{
                            color: '#4282ea',
                            width: '50px',
                            height: '50px'
                        }}
                        onClick={() => setI(i++)}
                    >Вправо</IconChevronRight>
                }
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <img width={'450px'} src={memo} />
            </div>
        </div>
    )

}
export default Comparison;