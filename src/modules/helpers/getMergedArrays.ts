import { MapResponse } from "../api";

export default function GetMergedArrays(a: MapResponse[], b: MapResponse[]) {
    let arr3 = a.filter(function(obj){
        return b.indexOf(obj) == -1
    })
    return arr3
}