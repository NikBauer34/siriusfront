import React, { FC } from "react";
import { Login } from "../components/index";
import { Background } from "../ui/index";

const LoginPage: FC = () => {
    return (
        <Background backgroundImage="url(../img/background.png)">
            <Login />
        </Background>           
    );
};

export default LoginPage;