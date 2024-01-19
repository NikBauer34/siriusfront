import { MapResponse } from "../api";

export default function GetMergedArrays(a: MapResponse[], b: MapResponse[]) {
    const c = a.filter(function (obj) {return b.indexOf(obj) == -1;})
    return c
}