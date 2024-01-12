import { Input } from "@mantine/core";
import React, { FC } from "react";
import './UnderlineInput.modules.css';

const UnderlineInput: FC = (props: any) => {
    return (
        <Input className='definput' {...props}></Input>
    );
};
export default UnderlineInput;