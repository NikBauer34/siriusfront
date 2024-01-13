import React, { FC } from "react";
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';
import { RegForm } from "../../modules/components";


const Reg: FC = () => {
    return (
        <div className="centerDiv">
            <RegForm />
        </div>
    );
};

export default Reg;