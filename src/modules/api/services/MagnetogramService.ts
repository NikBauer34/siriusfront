import { AxiosResponse } from "axios";
import { $api, MapService } from "..";

export default class MagnetogramService {
    static async getPipeMagnitograms(pipe_id: string): Promise<AxiosResponse<MagnetogramResponse[]>> {
        return $api.get<MagnetogramResponse[]>(`/magnetogram/get_pipe_magnetograms/${pipe_id}`)
    }
}