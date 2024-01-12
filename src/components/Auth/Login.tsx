<<<<<<< HEAD
import React, { FC } from 'react';
import { LoginForm } from '../../modules/components/index';
// import { SchemeToggle } from '../../ui';
import '../../ui/styles/title.css';
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/body.css';


=======
import React, { FC } from 'react'
import { LoginForm } from '../../modules/components/index'
>>>>>>> e7847fc7f00176509de0b005b4a7c770866c3ed4
const Login: FC = () => {
    return (
        <div className='centerDiv'>
            <div className="title">
                Вход
            </div>
            <LoginForm></LoginForm>
<<<<<<< HEAD
            {/* <SchemeToggle/> */}
=======
>>>>>>> e7847fc7f00176509de0b005b4a7c770866c3ed4
        </div>
    )
}
export default Login