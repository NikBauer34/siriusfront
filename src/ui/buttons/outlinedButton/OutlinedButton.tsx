import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import './OutlinedButton.modules.css';

interface outlinedprops{
    className: string;
    type: string;
    children: ReactNode;
}


const OutlinedButton: FC<outlinedprops> = (props) => {
    return(
<<<<<<< HEAD
        <Button  fullWidth className={props.className} variant="outline">{props.children}</Button>
=======
        <Button fullWidth className={props.className} type={props.type} variant="outline">{props.children}</Button>
>>>>>>> b5a01952351dbd64534bc94f76c6037dfee18e76
    );
};

export default OutlinedButton;