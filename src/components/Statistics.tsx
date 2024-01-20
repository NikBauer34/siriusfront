import { BarChart, AreaChart } from "@mantine/charts";
import React, { FC, useContext, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { Context } from "../main";
import '../ui/styles/statistics.css'
import '@mantine/charts/styles.css'
import { Loader } from "@mantine/core";
import { toJS } from "mobx";
import StatisticsService from "../modules/api/services/StatisticsService";
interface StatisticsProps {
    pipe_id: string
}
const Statistics: FC<StatisticsProps> = (props) => {
    const {pipe} = useContext(Context)
    const [data, setData] = useState<StatisticsResponse[] | null>(null) //заглушка

    useEffect(() => {
        getStatistics()
    }, [])
    const getStatistics = async() => {
        const response = await StatisticsService.getPipeStatistics(props.pipe_id)
        setData(response.data)
    }
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