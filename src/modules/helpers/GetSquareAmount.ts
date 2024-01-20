import { RefObject } from "react";

export default function GetSquareAmount(ref: RefObject<HTMLElement>, squareside: number, borderspace: number, spacebetweensquares: number) {
    const element = ref.current?.getBoundingClientRect()
    console.log(element?.width)
    if (element != null) {
        let all_space = Math.floor((element.width - (borderspace * 2)))
        console.log(all_space)
        let squareSide = Math.ceil(all_space / spacebetweensquares)
        console.log(squareSide)
        let value = Math.floor(squareSide / squareside)
        console.log(value)
        return value
    }
    return 0
}