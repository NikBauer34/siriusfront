import React, { FC } from "react";
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';
import { RegForm } from "../../modules/components";


const Reg: FC = () => {
    return (
        <div className="centerDiv">
            <div className="title">
                Регистрация
            </div>
            <RegForm />
        </div>
    );
};

export default Reg;