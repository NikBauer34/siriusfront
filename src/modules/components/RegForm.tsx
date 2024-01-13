import React, { FC, useContext } from "react";
import '../../ui/styles/body.css';
import { IRole } from "../api";
import { Context } from "../../main";
import { useForm } from "@mantine/form";
import { OutlinedButton, UnderlineInput } from "../../ui";
import { NativeSelect } from "@mantine/core";

interface regFormProps {
    name: string;
    surname: string;
    nikname: string;
    password: string;
    role: IRole;
}

const RegForm: FC = () => {
    const { user, pipe } = useContext(Context)

    const RegHookForm = useForm({
        initialValues: { name: '', surname: '', nikname: '', password: '', role: 'Мастер'},
        validateInputOnChange: true,
        validate: {
            name: (val) => (val.length >= 2 ? null : 'Имя не может быть короче 2 букв'),
            surname: (val) => (val.length >= 2 ? null : 'Фамилия не может быть короче 2 букв'),
            nikname: (val) => (val.length > 5 ? null : 'Ник не может быть меньше шести букв'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше шести букв')
        }
    })

    const FormOnSubmit = ({ name, surname, nikname, password, role }: regFormProps) => {
        user.setLoading(true)
        user.registration(name, surname, nikname, password, role)
        if (!user.isError) {
            pipe.checkPipes()
            user.setLoading(false)
        }
    }

    const RegFormValues: string[] = ['name', 'surname', 'nikname', 'password', 'role']

    return (
        <form className="authForm" onSubmit={RegHookForm.onSubmit((val) => FormOnSubmit(val))}>
            {RegFormValues.map((item, _index) => {
                return (
                    <UnderlineInput key={item} {...RegHookForm.getInputProps(item)}></UnderlineInput>
                )
            })}
            <NativeSelect style={{marginTop:20}} variant="filled" withAsterisk label="Выберите вашу должность" data={['Начальник', 'Инженер-диагностик', 'Диагностик', 'Мастер']} />
            <OutlinedButton className='outlinedButton'>Зарегистрироваться</OutlinedButton>
        </form>
    );
};

export default RegForm;