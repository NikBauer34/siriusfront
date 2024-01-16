import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import './OutlinedButton.modules.css';
import { useNavigate } from "react-router-dom";
interface outlinedprops {
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (path?: string) => void ;
    children?: ReactNode;
    
}

const OutlinedButton: FC<outlinedprops> = (props) => {
    return(
        <Button fullWidth className={props.className} type={props.type} variant="outline" >{props.children}</Button>
    );
};

export default OutlinedButton;