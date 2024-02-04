import { PasswordInput } from "@mantine/core";
import { FC } from "react";
import './PasswordInputDef.modules.css';

interface passwordprops {
    label?: string;
    placeholder: string;
}

const PasswordInputDef: FC<passwordprops> = (props) => {
    return (
        <PasswordInput mt={15} mb={10} className="passwordInputDef" {...props}></PasswordInput>
    )
}

export default PasswordInputDef;