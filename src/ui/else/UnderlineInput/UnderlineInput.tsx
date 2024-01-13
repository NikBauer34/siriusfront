import { Input } from "@mantine/core";
import React, { FC } from "react";
import './UnderlineInput.modules.css';

interface underlineprops {
    placeholder: string;
}


const UnderlineInput: FC<underlineprops> = (props) => {
    return (
        <Input c={'black'} mt={15} mb={10} className='definput' {...props}></Input>
    );
};
export default UnderlineInput;