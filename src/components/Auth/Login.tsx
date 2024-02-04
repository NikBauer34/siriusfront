import { FC, useContext } from 'react';
import { LoginForm } from '../../modules/components/index';
// import { SchemeToggle } from '../../ui';
import '../../ui/styles/title.css';
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';
import { Loader, LoadingOverlay } from '@mantine/core';
import { Context } from '../../main';


const Login: FC = () => {
    const {user} = useContext(Context)
    
    return (
        <div className='centerDiv'>
            <LoadingOverlay visible={user.isLoading} loaderProps={{children: <Loader/>}}/>
            <div className="title">
                Вход
            </div>
            <LoginForm></LoginForm>
            {/* <SchemeToggle/> */}
        </div>
    );
};

export default Login;