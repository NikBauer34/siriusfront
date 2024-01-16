import { MapResponse } from "../api/index";

export default function GetClosestMark(placemarks: MapResponse[], userGeolocation: [number, number]) {
    let closestAtitude: number;
    let closestValue = 100000
    let closestPlacemark: number[] = [1000, 1000]
    for (let i = 0; i < placemarks?.length; i++) {
        let [latitude, longitude] = [placemarks[i].location[0], placemarks[i].location[1]]
        closestAtitude = Math.min(latitude - userGeolocation[0], longitude - userGeolocation[1])
        if (closestAtitude <= closestValue) {
            closestValue = closestAtitude
            closestPlacemark = Array.from([latitude, longitude])
        }
    }
    console.log(closestPlacemark)
    return closestPlacemark
}