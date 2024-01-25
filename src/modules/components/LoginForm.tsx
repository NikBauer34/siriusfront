import { useForm } from "@mantine/form";
import React, { FC, useContext, useState } from "react";
import { Button, Loader } from "@mantine/core";
import { Context } from "../../main";
import { OutlinedButton, PasswordInputDef, UnderlineInput } from "../../ui/index";
import '../../ui/styles/authForm.css';
import '../../ui/styles/centerDiv.css';
import '../../ui/styles/spanOr.css';
import '../../ui/styles/body.css';
import '../../ui/styles/formContainer.css';
import { useNavigate } from "react-router-dom";
interface LoginProps {
    nikname: string;
    password: string;
}

const LoginForm: FC = () => {
    const { user, pipe, page } = useContext(Context)
    const navigate = useNavigate()

    const LoginHookForm = useForm({
        initialValues: { nikname: '', password: '' },
        validateInputOnChange: true,
        validate: {
            nikname: (val) => (val.length > 3 ? null : 'Логин не может быть меньше 4 символов'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше 6 символов')
        }
    })

    const FormOnSubmit = ({ nikname, password }: LoginProps) => {
        user.login(nikname, password)
        if (!user.isError) {
            pipe.checkPipes();
            navigate('/main')
        }
    }
    if (user.isLoading) {
        return <Loader h={300} />
    }
    return (
        <div className="formContainer">
            <form className="authForm" onSubmit={LoginHookForm.onSubmit((val) => FormOnSubmit(val))}>
                <div className="formFields">
                    <UnderlineInput placeholder="Логин" {...LoginHookForm.getInputProps('nikname')} />
                    <PasswordInputDef placeholder="Пароль" {...LoginHookForm.getInputProps('password')} />
                </div>
                <Button style={{ marginTop: 15 }} fullWidth className="filledButton" type="submit">Войти</Button>
                <span className="spanOr">или</span>
                <OutlinedButton onClick={() => navigate('/registration')} className='outlinedButton'>Зарегистрироваться</OutlinedButton>
            </form>
        </div>
    )
}
export default LoginForm;


