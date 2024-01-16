import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import './OutlinedButton.modules.css';
import { useNavigate } from "react-router-dom";
interface outlinedprops{
    className: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children: ReactNode;
    path?: string
}


const OutlinedButton: FC<outlinedprops> = (props) => {
    const navigate = useNavigate()
    return(
        <Button fullWidth className={props.className} type={props.type} variant="outline" onClick={() => navigate(props.path)}>{props.children}</Button>
    );
};

export default OutlinedButton;