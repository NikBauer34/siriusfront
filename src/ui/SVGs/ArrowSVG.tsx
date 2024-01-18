import React, { FC } from 'react'
import { SVGProps } from '../../modules/constants'

const ArrowSVG: FC<SVGProps> = (props) => {
    return (
        <svg width={props.width ? props.width : "15"} height={props.height ? props.height : "24"} viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} >
            <path d="M13.7372 0.863023C14.0653 1.1912 14.2496 1.63624 14.2496 2.10027C14.2496 2.56431 14.0653 3.00935 13.7372 3.33752L5.07471 12L13.7372 20.6625C14.056 20.9926 14.2324 21.4346 14.2284 21.8935C14.2244 22.3523 14.0404 22.7912 13.7159 23.1157C13.3914 23.4402 12.9525 23.6242 12.4937 23.6282C12.0348 23.6322 11.5928 23.4558 11.2627 23.137L1.36296 13.2373C1.03489 12.9091 0.850586 12.4641 0.850586 12C0.850586 11.536 1.03489 11.0909 1.36296 10.7628L11.2627 0.863023C11.5909 0.534949 12.0359 0.350647 12.5 0.350647C12.964 0.350647 13.409 0.534949 13.7372 0.863023Z" fill="#ADCDE0"/>
        </svg>
    )
}
export default ArrowSVG