import { BarChart } from "@mantine/charts";
import React, { FC, useEffect, useState } from "react";
import { StatisticsResponse } from "../modules/api/http/StatisticsResponse";
import { pipe } from "../main";

const Statistics: FC = () => {
    const [data, setData] = useState<StatisticsResponse[]>([{month: 'Январь', defects: 0}]) //заглушка
    useEffect(() => {
        let testData = pipe.getPipeStatistics(pipe.selectedpipe)
    }, [])
    return (
        <BarChart 
            h={300}
            data={data}
            dataKey="month"
            series={[
                {name: pipe.selectedpipe, color: 'violet'}
            ]}
            tickLine="y"
        />
    )
}