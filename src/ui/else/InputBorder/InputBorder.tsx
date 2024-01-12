import React, { FC } from 'react'
import './IB.css'
const InputBorder: FC = (props: any) => {
    return (
        <div className='group'>
            <label className='lab'>{props.holder}</label>
            <input className='inp'></input>
        </div>
    )
}
export default InputBorder