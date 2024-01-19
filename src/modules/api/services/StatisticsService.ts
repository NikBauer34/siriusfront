import axios, { AxiosResponse } from "axios";
import { StatisticsResponse } from "../http/StatisticsResponse";
import { $api } from "..";

export default class StatisticsService {
    static async getPipeStatistics(pipe_id: string): Promise<AxiosResponse<StatisticsResponse[]>> {
        return $api.get<StatisticsResponse[]>(`/pipe/get_pipe_statistics/${pipe_id}`)
    }
} 