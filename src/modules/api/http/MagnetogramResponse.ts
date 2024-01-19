export interface MagnetogramResponse {
    _id: string
    title: string;
    author: string;
    pipe: string
}
export interface MagnetogramMarkupData {
    markup: number[]
}
export interface MagnetogramVersionsData {
    info: [{
        version: string,
        date: Date
    }]
}