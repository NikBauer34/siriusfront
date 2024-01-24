import { makeAutoObservable } from "mobx";
import MagnetogramService from "../api/services/MagnetogramService";
import { MagnetogramCreation, MagnetogramMarkupData, MagnetogramResponse, MagnetogramVersionsComparison, MagnetogramVersionsData } from "../api/http/MagnetogramResponse";

export default class MagnetogramStore {
    isLoading = false;
    isError = false;
    constructor() {
        makeAutoObservable(this)
    }
    setError(val: boolean) {
        this.isError = val
    }
    setLoading(val: boolean) {
        this.isLoading = val
    }
    async getPipeMagnetograms(pipe_id: string): Promise<MagnetogramResponse[] | []> {
        try {
            this.setLoading(true)
            console.log('pipe_id')
            console.log(pipe_id)
            const magnetograms = await MagnetogramService.getPipeMagnetograms(pipe_id)
            this.setError(false)
            return magnetograms.data
        } catch (e: any) {
            this.setError(true)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
    async getMagnetogramMarkupData(magnetogram_id: string, i: number): Promise<MagnetogramMarkupData> {
        try {
            this.setLoading(true)
            const magnetogram = await MagnetogramService.getMagnetogramMarkupData(magnetogram_id, i)
            this.setError(false)
            return magnetogram.data
        } catch (e: any) {
            this.setError(true)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
    async getMagnetogramVersionsData(magnetogram_id: string): Promise<MagnetogramVersionsData> {
        try {
            this.setLoading(true)
            const magnetogram = await MagnetogramService.getMagnetogramVersionsData(magnetogram_id)
            this.setError(false)
            return magnetogram.data
        } catch (e: any) {
            this.setError(true)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
    async getMagnetogramVersionsComparison(id: string, first_version: number, second_version: number): Promise<MagnetogramVersionsComparison> {
        try {
            this.setLoading(true)
            const magnetogram_comparison = await MagnetogramService.getMagnetogramVersionsComparison(id, first_version, second_version)
            this.setError(false)
            return magnetogram_comparison.data
        } catch (e: any) {
            this.setError(true)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
    async createMagnetogram(formdata: FormData): Promise<MagnetogramCreation> {
        try {
            this.setLoading(true)
            const magnetogram = await MagnetogramService.createMagnetogram(formdata)
            this.setError(false)
            return magnetogram.data
        } catch (e: any) {
            this.setError(true)
            console.log(e.response?.data?.message)
            return e.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
}