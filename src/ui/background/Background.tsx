import React, { FC, ReactNode } from "react";
import "./Background.modules.css";

interface PageProps {
    className?: string;
    backgroundImage?: string;
    children?: ReactNode;
}

const Background: FC<PageProps> = ({ backgroundImage, children }) => {
    const style = {
        backgroundImage,
        backgroundAttachment: 'fixed',
        backgroundPosition: 0,
        backgroundSize: 'cover',
    };
    return (
        <div className="page" style={style}>{children}</div>
    );
};

export default Background;