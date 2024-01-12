import { useForm } from "@mantine/form";
import { FC, ReactNode, useContext } from "react";
import { Button } from "@mantine/core";
import { Context } from "../../main";
import { UnderlineInput } from "../../ui/index";
import '../../ui/styles/authForm.css';
import '../../ui/styles/centerDiv.css';



interface LoginProps {
    nikname: string;
    password: string;
}
const LoginForm: FC = () => {
    const { user, pipe } = useContext(Context)

    const LoginHookForm = useForm({
        initialValues: { nikname: '', password: '' },
        validateInputOnChange: true,
        validate: {
            nikname: (val) => (val.length > 5 ? null : 'Никнэйм не может быть меньше шести букв'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше шести букв')
        }
    })
    const FormOnSubmit = ({ nikname, password }: LoginProps) => {
        user.setLoading(true)
        user.login(nikname, password)
        if (user.isError) {
            pipe.checkPipes()
        }
    }
    const LoginFormValues: string[] = ['nikname', 'password']
    return (
        <form className="authForm" onSubmit={LoginHookForm.onSubmit((val) => FormOnSubmit(val))}>
            {LoginFormValues.map((item, index) => {
                return (
                    <UnderlineInput key={item} {...LoginHookForm.getInputProps(item)}></UnderlineInput>
                )
            })}
            <Button fullWidth className="filledButton" type="submit">Войти</Button>
            <span className="spanOr">или</span>
        </form>
    )
}
export default LoginForm