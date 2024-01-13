import React, { FC } from 'react';
import { LoginForm } from '../../modules/components/index';
// import { SchemeToggle } from '../../ui';
import '../../ui/styles/title.css';
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';


const Login: FC = () => {
    return (
        <div className='centerDiv'>
            <div className="title">
                Вход
            </div>
            <LoginForm></LoginForm>
            {/* <SchemeToggle/> */}
        </div>
    );
};

export default Login;