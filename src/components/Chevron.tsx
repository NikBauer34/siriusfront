import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { Dispatch, FC, SetStateAction } from "react";
interface ChevronProps {
    left: boolean,
    right: boolean,
    i: number,
    setI: Dispatch<SetStateAction<number>>
}
const Chevron: FC<ChevronProps> = (props) => {
    return (
        <>
            {props.left &&
                <IconChevronLeft onClick={() => props.setI((props.i)--)}>Влево</IconChevronLeft>
            }
            {props.right &&
                <IconChevronRight onClick={() => props.setI(props.i++)}></IconChevronRight>
            }
        </>
    )
}
export default Chevron