import { AxiosResponse } from "axios";
import { $api, MapService } from "..";
import { MagnetogramMarkupData, MagnetogramResponse, MagnetogramVersionsComparison, MagnetogramVersionsData } from "../http/MagnetogramResponse";

export default class MagnetogramService {
    static async getPipeMagnetograms(pipe_id: string): Promise<AxiosResponse<MagnetogramResponse[] | []>> {
        return $api.get<MagnetogramResponse[]>(`/magnetogram/get_pipe_magnetograms/${pipe_id}`)
    }
    static async getMagnetogramMarkupData(magnetogram_id: string, i: number): Promise<AxiosResponse<MagnetogramMarkupData>> {
        return $api.get<MagnetogramMarkupData>(`/magnetogram/get_magnetogram_markup_data?id=${magnetogram_id}&i=${i}`)
    }
    static async getMagnetogramVersionsData(magnetogram_id: string): Promise<AxiosResponse<MagnetogramVersionsData>> {
        return $api.get<MagnetogramVersionsData>(`/magnetogram/get_versions_data/${magnetogram_id}`)
    }
    static async getMagnetogramVersionsComparison(id: string, first_version: number, second_version: number): Promise<AxiosResponse<MagnetogramVersionsComparison>> {
        return $api.get<MagnetogramVersionsComparison>(`/magnetogram/get_magnetogram_versions_comparison?id=${id}&first_version=${first_version}&second_version=${second_version}`)
    }
}