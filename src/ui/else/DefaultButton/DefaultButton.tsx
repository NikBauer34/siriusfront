import { FC, ReactNode } from "react";
interface DBProps {
    type: 'primary' | 'secondary';
    onClick?: () => void;
    children: ReactNode
}
const DefaultButton: FC<DBProps> = () => {
    return (
        <div>Hi</div>
    )
}
export default DefaultButton