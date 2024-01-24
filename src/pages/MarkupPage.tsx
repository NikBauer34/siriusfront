import React, { FC } from "react";
import { Markup } from "../components";
import { ArrowBack } from "../modules/components";
import { useNavigate } from "react-router-dom";

const MarkupPage: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Markup />
            <ArrowBack onClick={() => navigate('/marking')} />
        </>

    )
}
export default MarkupPage;