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
    pipe_id: string | undefined
}
const Statistics: FC<StatisticsProps> = (props) => {
    const {pipe} = useContext(Context)
    const [data, setData] = useState<StatisticsResponse[] | null>(null) //заглушка
    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getStatistics()
    }, [props.pipe_id])

    const getStatistics = async() => {
        if (props.pipe_id != undefined) {
            setLoading(true)
            const response = await pipe.getPipeStatistics(props.pipe_id)
            setData(response)
            setLoading(false)
        }
    }
    if (props.pipe_id == undefined) {
        return <h1>Не выбрана труба</h1>
    }
    if (pipe.isLoading || isLoading) {
        return <Loader h={300} />
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