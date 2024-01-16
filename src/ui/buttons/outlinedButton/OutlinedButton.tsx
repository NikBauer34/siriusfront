import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import './OutlinedButton.modules.css';

interface outlinedprops {
    className: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (navigate: any) => void ;
    children: ReactNode;
}


const OutlinedButton: FC<outlinedprops> = (props) => {
    return (
        <Button fullWidth className={props.className} type={props.type} onClick={props.onClick} variant="outline">{props.children}</Button>
    );
};

export default OutlinedButton;