import React, { FC, useContext } from "react";
import '../../ui/styles/body.css';
import { IRole } from "../api";
import { Context } from "../../main";
import { useForm } from "@mantine/form";
import { GradientButton, PasswordInputDef, UnderlineInput } from "../../ui";
import { NativeSelect } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface regFormProps {
    name: string;
    surname: string;
    nikname: string;
    password: string;
    confirmPassword: string;
    role: IRole;
}

const RegForm: FC = () => {
    const { user, pipe } = useContext(Context)
    const navigate = useNavigate()

    const RegHookForm = useForm({
        initialValues: { name: '', surname: '', nikname: '', password: '', confirmPassword: '', role: 'Мастер' },
        validateInputOnChange: true,
        validate: {
            name: (val) => (val.length >= 2 ? null : 'Имя не может быть меньше 2 букв'),
            surname: (val) => (val.length >= 2 ? null : 'Фамилия не может быть меньше 2 букв'),
            nikname: (val) => (val.length > 3 ? null : 'Логин не может быть меньше 4 символов'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше 6 символов'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Пароли не совпадают' : null,
        }
    })

    const FormOnSubmit = async({ name, surname, nikname, password, role }: regFormProps) => {
        user.setLoading(true)
        await user.registration(name, surname, nikname, password, role)
        if (!user.isError) {
            console.log('here')
            pipe.checkPipes()
            navigate('/pages/main')
        }
        user.setLoading(false)
    }

    return (
        <form className="authForm" onSubmit={RegHookForm.onSubmit((val) => FormOnSubmit(val))}>
            <UnderlineInput  placeholder="Имя" {...RegHookForm.getInputProps('name')} />
            <UnderlineInput placeholder="Фамилия" {...RegHookForm.getInputProps('surname')} />
            <UnderlineInput placeholder="Придумайте логин" {...RegHookForm.getInputProps('nikname')} /> 
            <PasswordInputDef placeholder="Придумайте пароль" {...RegHookForm.getInputProps('password')} />
            <PasswordInputDef placeholder="Подтвердите пароль" {...RegHookForm.getInputProps('confirmPassword')} />
            <NativeSelect mt={10} mb={20} variant="filled" withAsterisk label="Выберите вашу должность" {...RegHookForm.getInputProps('role')} data={['Начальник', 'Инженер-диагностик', 'Диагностик', 'Мастер']} />
            <GradientButton className='outlinedButton' type="submit">Зарегистрироваться</GradientButton>
        </form>
    );
};

export default RegForm;