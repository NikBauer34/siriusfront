import React, { FC } from "react";
import { Login } from "../components/index";
import '../ui/styles/bg.css';
import background from '../img/background.png';

const LoginPage: FC = () => {
    return (
        <div className="bg" style={{
            backgroundImage:`url(${background})`
        }}>
            <Login />
        </div>           
    );
};

export default LoginPage;