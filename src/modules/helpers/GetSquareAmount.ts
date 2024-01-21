import { RefObject } from "react";

export default function GetSquareAmount(ref: RefObject<HTMLElement>, squareside: number, borderspace: number, spacebetweensquares: number) {
    const element = ref.current?.getBoundingClientRect()
    console.log(element?.width)
    if (element != null) {
        let all_width = element.width - (borderspace * 2) - spacebetweensquares
        let square_plus_space_amount = all_width / (squareside + spacebetweensquares)
        return square_plus_space_amount

    }
    return 0
}