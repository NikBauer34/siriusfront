import { Button } from "@mantine/core";
import React, { FC, ReactNode } from "react";
interface DBProps {
    type: 'primary' | 'secondary';
    onClick?: () => void;
    children: ReactNode
}
const DefaultButton: FC<DBProps> = (props) => {
    return (
        <div> Hi</div>
    )
}
export default DefaultButton