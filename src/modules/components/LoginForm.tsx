import { useForm } from "@mantine/form";
import { FC, useContext } from "react";
import { Button } from "@mantine/core";
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
    const { user, pipe } = useContext(Context)
    const navigate = useNavigate()
    const LoginHookForm = useForm({
        initialValues: { nikname: '', password: '' },
        validateInputOnChange: true,
        validate: {
            nikname: (val) => (val.length > 3 ? null : 'Логин не может быть меньше 4 букв'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше шести символов')
        }
    })

    const FormOnSubmit = ({ nikname, password }: LoginProps) => {
        user.setLoading(true)
        user.login(nikname, password)
        if (!user.isError) {
            pipe.checkPipes()
            navigate('/main')
        }
        user.setLoading(false)
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