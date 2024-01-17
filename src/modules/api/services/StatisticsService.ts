import axios, { AxiosResponse } from "axios";
import { StatisticsResponse } from "../http/StatisticsResponse";

export default class StatisticsService {
    static async getPipeStatistics(pipe_id: string): Promise<AxiosResponse<StatisticsResponse[]>> {
        return axios.get<StatisticsResponse[]>('/pipe/get_pipe_statistics', {data: {pipe_id}})
    }
} 