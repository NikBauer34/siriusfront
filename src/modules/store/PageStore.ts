import { makeAutoObservable } from "mobx";

export default class PageStore {
    isLoading = false;
    constructor() {
        makeAutoObservable(this)
    }
    setLoading(val: boolean) {
        this.isLoading = val
    }
}