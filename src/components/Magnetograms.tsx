import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../main";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { Loader } from "@mantine/core";
import { MagnetogramResponse } from "../modules/api";
import { CreateMarkupCard, List } from "../modules/components";
import '../ui/styles/grid.css';
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
            ? <div className="grid_items">
                <List 
                    items={data} 
                    notFoundMessage="Не найдено магнитограмм"
                    renderItem={(magnetograms: MagnetogramResponse) => <MagnetogramCard key={magnetograms._id} magnetogram={magnetograms}/>}
                    lastComponentItems={[0]}
                    renderLastComponentItems={(item: any) => <CreateMarkupCard/>}
                    />
            </div>
            : <h1>У трубы нет магнитограмм</h1>}
        </>
    )
}
export default Magnetograms;