import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import './OutlinedButton.modules.css';
<<<<<<< HEAD

interface outlinedprops {
    className: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (navigate: any) => void ;
=======
import { useNavigate } from "react-router-dom";
interface outlinedprops{
    className: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
>>>>>>> aa9e75fb045288e6ff26a477ca538072ec1f7c7f
    children: ReactNode;
}


const OutlinedButton: FC<outlinedprops> = (props) => {
<<<<<<< HEAD
    return (
        <Button fullWidth className={props.className} type={props.type} onClick={props.onClick} variant="outline">{props.children}</Button>
=======
    const navigate = useNavigate()
    return(
        <Button fullWidth className={props.className} type={props.type} variant="outline">{props.children}</Button>
>>>>>>> aa9e75fb045288e6ff26a477ca538072ec1f7c7f
    );
};

export default OutlinedButton;