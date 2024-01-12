import React, { FC } from 'react'
import { LoginForm } from '../../modules/components/index'
import { SchemeToggle } from '../../ui'
const Login: FC = () => {
    return (
        <div>
            <LoginForm></LoginForm>
            <SchemeToggle/>
        </div>
    )
}
export default Login