import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { GridList } from "../modules/components";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { Loader } from "@mantine/core";
import { MagnetogramResponse } from "../modules/api";
interface MagnetogramsProps {
    pipe_id: string
}
const Magnetograms: FC<MagnetogramsProps> = ({pipe_id}) => {
    const {magnetogram} = useContext(Context)
    const [data, setData] = useState<MagnetogramResponse[] | null>(null)
    useEffect(() => {
        getMagnetograms()
        console.log('pipe_id effected')
    }, [pipe_id])
    const getMagnetograms = async() => {
        const response = await magnetogram.getPipeMagnetograms(pipe_id)
        console.log('tyiff')
        console.log(response)
        if (response.length != 0) {
            setData(response)
        }
    }
    if (magnetogram.isLoading) {
        return <Loader h={300}/>
    }
    if (magnetogram.isError) {
        return <h1>Труба не выбрана</h1>
    }
    return (
        <>
            {data != null 
            ? <GridList 
            items={data} 
            notFoundMessage=""
            renderItem={(magnetograms: MagnetogramResponse) => <MagnetogramCard key={magnetograms._id} magnetogram={magnetograms}/>}/>
            : <h1>У трубы нет магнитограмм</h1>}
        </>
    )
}
export default Magnetograms