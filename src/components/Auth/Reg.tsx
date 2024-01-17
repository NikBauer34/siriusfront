import React, { FC, useContext } from "react";
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';
import { RegForm } from "../../modules/components";
import '../../ui/styles/title.css'
import { Context } from "../../main";
import { Loader, LoadingOverlay } from "@mantine/core";


const Reg: FC = () => {
    const {user} = useContext(Context)

    return (
        <div className="centerDiv">
            <LoadingOverlay visible={user.isLoading} loaderProps={{children: <Loader/>}}></LoadingOverlay>
            <div className="title">
                Регистрация
            </div>
            <RegForm />
        </div>
    );
};

export default Reg;