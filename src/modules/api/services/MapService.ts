import $api from "../http/http.ts";
import { AxiosResponse } from "axios";
import { MapResponse } from "../index.ts";

export default class MapService {
  static async GetMapProps(): Promise<AxiosResponse<MapResponse[]>> {
    return $api.get<MapResponse[]>('/pipe/get_pipes')
  }
  static async getUserPipes(): Promise<AxiosResponse<MapResponse[]>> {
    return $api.get<MapResponse[]>('/pipe/get_pipe_user')
  }
  static async newUserPipe(_id: string): Promise<AxiosResponse<MapResponse>> {
    return $api.post('/pipe/new_user_pipe', {_id})
  }
}