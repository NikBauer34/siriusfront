import { AxiosResponse } from "axios";
import { $api, MapService } from "..";
import { MagnetogramMarkupData, MagnetogramResponse, MagnetogramVersionsData } from "../http/MagnetogramResponse";

export default class MagnetogramService {
    static async getPipeMagnetograms(pipe_id: string): Promise<AxiosResponse<MagnetogramResponse[] | []>> {
        return $api.get<MagnetogramResponse[]>(`/magnetogram/get_pipe_magnetograms/${pipe_id}`)
    }
    static async getMagnetogramMarkupData(magnetogram_id: string, page: number, bundle: number): Promise<AxiosResponse<MagnetogramMarkupData>> {
        return $api.get<MagnetogramMarkupData>(`/magnetogram/get_magnetogram_markup_data?id=${magnetogram_id}&page=${page}&bundle=${bundle}`)
    }
    static async getMagnetogramVersionsData(magnetogram_id: string): Promise<AxiosResponse<MagnetogramVersionsData>> {
        return $api.get<MagnetogramVersionsData>(`/magnetogram/get_versions_data/${magnetogram_id}`)
    }
}