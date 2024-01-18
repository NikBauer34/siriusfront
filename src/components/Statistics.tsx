import { BarChart } from "@mantine/charts";
import React, { FC, useContext, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { Context } from "../main";
import { toJS } from "mobx";
import { MapResponse } from "../modules/api";
interface Statistics {
    selectedpipe: MapResponse | null
}
const Statistics: FC<Statistics> = (props) => {
    const {pipe} = useContext(Context)
    console.log(props.selectedpipe)
    const [data, setData] = useState<StatisticsResponse[]>([{month: 'Январь', defects: 0}]) //заглушка
    const getStatistics = async () => {
        let pipeData = await pipe.getPipeStatistics(props.selectedpipe)
        setData(pipeData)
    }
    useEffect(() => {
        getStatistics()
    }, [])
    return (
        <BarChart 
            h={300}
            data={data}
            dataKey="month"
            series={[
                {name: pipe.selectedpipe.title, color: 'violet'}
            ]}
            tickLine="y"
        />
    )
}
export default Statistics