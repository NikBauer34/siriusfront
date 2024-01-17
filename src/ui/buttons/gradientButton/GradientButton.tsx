import { Button } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

interface gradientprops {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (navigate: any) => void ;
    children: ReactNode;
}


const GradientButton: FC<gradientprops> = (props) => {
    return(
        <Button
            fullWidth 
            className="gradientbutton"
            type={props.type} 
            onClick={props.onClick} 
            variant="gradient"
            gradient={{ from: 'rgba(64, 159, 255, 1)', to: 'rgba(210, 225, 250, 1)', deg: 90 }}
        >
            {props.children}
        </Button>
    );
};

export default GradientButton;