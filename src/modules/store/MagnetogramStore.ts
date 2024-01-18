import { makeAutoObservable } from "mobx";
import MagnetogramService from "../api/services/MagnetogramService";

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
    async getPipeMagnetograms(pipe_id: string): Promise<MagnetogramResponse[]> {
        try {
            this.setLoading(true)
            const magnetograms = await MagnetogramService.getPipeMagnitograms(pipe_id)
            this.setError(false)
            return magnetograms.data
        } catch (e: any) {
            this.setError(true)
            return e?.response?.data?.message
        } finally {
            this.setLoading(false)
        }
    }
}