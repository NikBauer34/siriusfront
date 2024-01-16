import { makeAutoObservable } from "mobx";
import { MapResponse, MapService } from "../api/index";
import { AxiosResponse } from "axios";

export default class PipeStore {
    userpipes = [] as MapResponse[] | null
    pipes = [] as MapResponse[]
    isError = false;
    isLoading = false;
    constructor(){
        makeAutoObservable(this)
    }
    setUserpipes(val: MapResponse[] | null) {
        this.userpipes = val
    }
    setPipes(val: MapResponse[]) {
        this.pipes = val
    }
    setError(val: boolean) {
        this.isError = val
    }
    setLoading(val: boolean) {
        this.isLoading = val
    }
    async getMapPipes() {
        try {
            const response = await MapService.GetMapProps()
            console.log(response)
            this.setPipes(response.data)
            return response
        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message);
            
        }
    }
    async getUserPipes() {
        try {
            const response = await MapService.getUserPipes()
            console.log(response)
            this.setUserpipes(response.data)
        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message);
        }
    }
    async checkPipes() {
        try {
        this.setLoading(true)
        this.getMapPipes()
        this.getUserPipes()

        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }
}