import { makeAutoObservable, toJS } from "mobx";
import { MapResponse, MapService } from "../api/index";
import StatisticsService from "../api/services/StatisticsService";
import { StatisticsResponse } from "../api/http/StatisticsResponse";

export default class PipeStore {
    userpipes = [] as MapResponse[]
    pipes = [] as MapResponse[]
    selectedpipe = {} as MapResponse
    isError = false;
    isLoading = false;
    constructor(){
        makeAutoObservable(this)
    }
    setUserpipes(val: MapResponse[]) {
        this.userpipes = Array.from(val)
    }
    setPipes(val: MapResponse[]) {
        this.pipes = Array.from(val)
    }
    setSelectedPipe(val: MapResponse) {
        this.selectedpipe = Object.assign({}, val)
        console.log('selected pipe, store')
        console.log(toJS(this.selectedpipe))
    }
    setError(val: boolean) {
        this.isError = val
    }
    setLoading(val: boolean) {
        this.isLoading = val
    }
    get selectedPipe() {
        return this.selectedpipe
    }
    async getMapPipes(): Promise<MapResponse[]> {
        try {
            const response = await MapService.GetMapProps()
            console.log('here')
            console.log(response)
            this.setPipes(response.data)
            this.setError(false)
            return response.data
        } catch (e: any) {
            this.setError(true)
            return e.response?.data?.message;
            
        }
    }
    async getUserPipes(): Promise<MapResponse[]> {
        try {
            const response = await MapService.getUserPipes()
            console.log(response)
            this.setUserpipes(response.data)
            this.setError(false)
            return response.data
        } catch (e: any) {
            this.setError(true)
            return (e.response?.data?.message);
        }
    }
    async newUserPipe(pipe: MapResponse) {
        try {
            this.setLoading(true)
            await MapService.newUserPipe(pipe._id)
            this.setUserpipes([...this.userpipes, pipe])
            console.log('userpipes---')
            console.log(toJS(this.userpipes))
            let filtered = this.pipes.filter(obj => obj._id !== pipe._id)
            this.setPipes(filtered)
            this.setError(false)
        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message);
        } finally {
            console.log('There')
            this.setLoading(false)
        }
    }
    async getPipeStatistics(pipe_id: string): Promise<StatisticsResponse[]> {
        try {
            this.setLoading(true)
            console.log('selected=------')
            console.log(toJS(this.selectedpipe))
            const response = await StatisticsService.getPipeStatistics(pipe_id)
            this.setError(false)
            return response.data
        } catch (e: any) {
            this.setError(true)
            console.log(e?.response?.data?.message)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
    async checkPipes() {
        try {
            this.setLoading(true)
            this.getUserPipes()
            this.getMapPipes()

            this.setLoading(false)
        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false)
        }
    }
}