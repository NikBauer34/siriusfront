export interface MagnetogramResponse {
    _id: string
    title: string;
    author: string;
    pipe: string
}
export interface MagnetogramMarkupData {
    version: string,
    date: Date,
    defects_count?: number,
    markup: number[],
    data_table: string
}
export interface MagnetogramVersionsData {
    info: [{
        version: string,
        date: Date,
        defects_count?: number,
        markup: number[],
        data_table: string
    }]
}
export interface MagnetogramVersion {
    version: string,
    date: Date,
    defects_count?: number,
    markup: number[],
    data_table: string
}
export interface MagnetogramVersionsComparison {
    first_version: MagnetogramVersion,
    second_version: MagnetogramVersion
}
export interface MagnetogramCreation {
    _id: string
    title: string;
    author: string;
    pipe: string
    info: [{
        version: string,
        date: Date,
        defects_count?: number,
        markup: number[],
        data_table: string
    }]
}