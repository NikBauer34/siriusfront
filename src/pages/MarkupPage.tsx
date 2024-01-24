import React, { FC } from "react";
import { Markup } from "../components";
import { ArrowBack, ModalAddMag } from "../modules/components";
import { useNavigate } from "react-router-dom";
import Fedya from '../img/Fedya.png';

const MarkupPage: FC = () => {
    const navigate = useNavigate();


    return (
        <>
            <Markup />
            <ModalAddMag
                withCloseButton={false}
                opened={true}
                title="Создать новую магнитограмму"
                onClose={() => true}
                onModalConfirmed={() => false}
            >
                <div>
                    <img src={Fedya} />
                </div>
                
            </ModalAddMag>
            <ArrowBack onClick={() => navigate('/marking')} />
        </>

    )
}
export default MarkupPage;