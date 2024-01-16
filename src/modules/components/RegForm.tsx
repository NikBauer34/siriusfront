import React, { FC, useContext } from "react";
import '../../ui/styles/body.css';
import { IRole } from "../api";
import { Context } from "../../main";
import { useForm } from "@mantine/form";
import { OutlinedButton, PasswordInputDef, UnderlineInput } from "../../ui";
import { NativeSelect } from "@mantine/core";

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

    const RegHookForm = useForm({
        initialValues: { name: '', surname: '', nikname: '', password: '', confirmPassword: '', role: 'Мастер' },
        validateInputOnChange: true,
        validate: {
            name: (val) => (val.length >= 2 ? null : 'Имя не может быть короче 2 букв'),
            surname: (val) => (val.length >= 2 ? null : 'Фамилия не может быть короче 2 букв'),
            nikname: (val) => (val.length > 3 ? null : 'Логин не может быть меньше 4 букв'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше шести символов'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Пароли не совпадают' : null,
        }
    })

    const FormOnSubmit = ({ name, surname, nikname, password, role }: regFormProps) => {
        user.setLoading(true)
        user.registration(name, surname, nikname, password, role)
        if (!user.isError) {
            // pipe.checkPipes()
            user.setLoading(false)
        }
    }

    return (
        <form className="authForm" onSubmit={RegHookForm.onSubmit((val) => FormOnSubmit(val))}>
            <UnderlineInput  placeholder="Имя" {...RegHookForm.getInputProps('name')} />
            <UnderlineInput placeholder="Фамилия" {...RegHookForm.getInputProps('surname')} />
            <UnderlineInput placeholder="Придумайте логин" {...RegHookForm.getInputProps('nikname')} /> 
            <PasswordInputDef placeholder="Придумайте пароль" {...RegHookForm.getInputProps('password')} />
            <PasswordInputDef placeholder="Подтвердите пароль" {...RegHookForm.getInputProps('confirmPassword')} />
            <NativeSelect mt={10} mb={20} variant="filled" withAsterisk label="Выберите вашу должность" {...RegHookForm.getInputProps('role')} data={['Начальник', 'Инженер-диагностик', 'Диагностик', 'Мастер']} />
            <OutlinedButton className='outlinedButton'>Зарегистрироваться</OutlinedButton>
        </form>
    );
};

export default RegForm;