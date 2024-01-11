import { useForm } from "@mantine/form";
import { FC, ReactNode } from "react";
import { Input, Button } from "@mantine/core";
const LoginForm: FC = () => {
    const LoginHookForm = useForm({
        initialValues: {nikname: '', password: ''},
        validateInputOnChange: true,
        validate: {
            nikname: (val) => (val.length > 5 ? null : 'Никнэйм не может быть меньше шести букв'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше шести букв')
        }
    })
    const LoginFormValues: string[] = ['nikname', 'password']
    return (
        <form onSubmit={LoginHookForm.onSubmit((val) => alert(val.nikname))}>
            <h1>Hi</h1>
            <Input {...LoginHookForm.getInputProps('nikname')}></Input>
            <Input {...LoginHookForm.getInputProps('password')}></Input>
            <Button type="submit">Сабмит</Button>
        </form>
    )
}
export default LoginForm