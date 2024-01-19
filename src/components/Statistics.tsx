import { BarChart, AreaChart } from "@mantine/charts";
import React, { FC, useContext, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { Context } from "../main";
import '../ui/styles/statistics.css'
import '@mantine/charts/styles.css'
import { Loader } from "@mantine/core";
import { toJS } from "mobx";
import {pipe} from '../main'
const Statistics: FC = () => {
    const [data, setData] = useState<StatisticsResponse[] | null>(null) //заглушка
    const getStatistics = async () => {
        let pipeData = await pipe.getPipeStatistics(pipe.selectedpipe)
        console.log(toJS(pipe.selectedpipe))
        setData(pipeData)
        console.log(data)
    }
    useEffect(() => {
        getStatistics()
    }, [])
    return (
        <>
            {data != null
            ? <BarChart
                color="black"
                h={300}
                data={data}
                className="chart"
                dataKey="month"
                series={[
                    { name: 'defects', color: 'violet.6' }
                ]}
                tickLine="y"
            />
            : <Loader h={300} />
            }
        
        </>
    )
}
export default Statistics