import { Button } from "@mantine/core";
import { FC, MouseEventHandler, ReactNode } from "react";
import './OutlinedButton.modules.css';
interface outlinedprops {
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: MouseEventHandler;
    children?: ReactNode;
    
}

const OutlinedButton: FC<outlinedprops> = (props) => {
    return(
        <Button fullWidth className={props.className} type={props.type} variant="outline" onClick={props.onClick}>{props.children}</Button>
    );
};

export default OutlinedButton;