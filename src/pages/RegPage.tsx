import { FC } from "react";
import Reg from "../components/Auth/Reg";
import '../ui/styles/bg.css';
import background from '../img/background.png';

const RegPage: FC = () => {
    return (
        <div className="bg" style={{
            backgroundImage: `url(${background})`
        }}>
            <Reg />
        </div>
    );
};

export default RegPage;