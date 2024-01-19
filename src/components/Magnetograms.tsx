import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { List } from "../modules/components";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { Loader } from "@mantine/core";
interface MagnetogramsProps {
    pipe_id: string
}
const Magnetograms: FC<MagnetogramsProps> = ({pipe_id}) => {
    const {magnetogram} = useContext(Context)
    const [data, setData] = useState<MagnetogramResponse[] | null>(null)
    useEffect(() => {
        getMagnetograms()
    }, [])
    const getMagnetograms = async() => {
        const response = await magnetogram.getPipeMagnetograms(pipe_id)
        setData(response)
    }
    return (
        <div>
            {magnetogram.isLoading 
            ? <Loader h={300} /> 
            : <List 
            items={data} 
            renderItem={(magnetograms: MagnetogramResponse) => <MagnetogramCard magnetogram={magnetograms}/>}/>}
        </div>
    )
}
export default Magnetograms