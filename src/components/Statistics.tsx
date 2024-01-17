import { BarChart } from "@mantine/charts";
import React, { FC, useContext, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { Context } from "../main";

const Statistics: FC = () => {
    const {pipe} = useContext(Context)
    const [data, setData] = useState<StatisticsResponse[] | any>([{month: 'Январь', defects: 0}]) //заглушка
    const getStatistics = async () => {
        let pipeData = await pipe.getPipeStatistics(pipe.selectedpipe)
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