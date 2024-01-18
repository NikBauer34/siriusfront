import { BarChart, AreaChart } from "@mantine/charts";
import React, { FC, useContext, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { Context } from "../main";
import '@mantine/charts/styles.css';

const Statistics: FC = () => {
    const disdata = [  //заглушка
        {month: 'Январь', defects: 0},
        {month: 'Февраль', defects: 5},
        {month: 'Март', defects: 7},
        {month: 'Апрель', defects: 5},
        {month: 'Май', defects: 0},
        {month: 'Июнь', defects: 10},
        {month: 'Июль', defects: 0},
        {month: 'Август', defects: 0},
        {month: 'Сентябрь', defects: 12},
        {month: 'Октябрь', defects: 0},
        {month: 'Ноябрь', defects: 0},
        {month: 'Декабрь', defects: 0}
      ]
    const {pipe} = useContext(Context);
    const [data, setData] = useState<StatisticsResponse[]>(disdata) //заглушка
    // const getStatistics = async () => {
    //     let pipeData = await pipe.getPipeStatistics(pipe.selectedpipe)
    //     setData(pipeData)
    //     console.log(data)
    // }
    // useEffect(() => {
    //     getStatistics()
    // }, [])
    return (
        <BarChart
            h={300}
            data={data}
            dataKey="month"
            // color={'black'}
            series={[
                { name: pipe.selectedpipe.title, color: 'violet.6' }
            ]}
            tickLine="y"
            style={{marginTop:19}}
        />
    );
};
export default Statistics;