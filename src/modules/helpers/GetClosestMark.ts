import { MapResponse } from "../api/index";

export default function GetClosestMark(placemarks: MapResponse[], userGeolocation: [number, number]) {
    let minimalValue = 100000
    let closestPlacemark: [number, number] = [0, 0]
    for (let i = 0; i < placemarks.length; i++) {
        let closestValue = Math.min(Math.abs(userGeolocation[0] - placemarks[i].location[0]), Math.abs(userGeolocation[1] - placemarks[i].location[1]))
        if (closestValue < minimalValue) {
            minimalValue = closestValue
            closestPlacemark = [placemarks[i].location[0], placemarks[i].location[1]]
        }
    }
    console.log(closestPlacemark)
    return closestPlacemark;
}