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
        date: Date,
        defects_count?: number,
        markup: number[]
    }]
}
export interface MagnetogramVersion {
    version: string,
    date: Date,
    defects_count?: number,
    markup: number[]
}
export interface MagnetogramVersionsComparison {
    first_version: MagnetogramVersion,
    second_version: MagnetogramVersion
}