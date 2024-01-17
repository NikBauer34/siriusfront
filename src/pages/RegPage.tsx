import React, { FC } from "react";
import Reg from "../components/Auth/Reg";
import { Background } from "../ui/index";

const RegPage: FC = () => { 
    return(
        <Background backgroundImage="url(../img/background.png)">
            <Reg />
        </Background>    
    );
};

export default RegPage;