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
            nikname: (val) => (val.length > 3 ? null : 'Логин не может быть меньше 4 символов'),
            password: (val) => (val.length > 5 ? null : 'Пароль не может быть меньше 6 символов')
        }
    })

    const FormOnSubmit = async ({ nikname, password }: LoginProps) => {
        const response = await user.login(nikname, password)
        console.log(response)
        if (!user.isError) {
            pipe.checkPipes();
            user.checkAuth()
            navigate('/marking')
        }
        if (typeof response == 'string') {
            // console.log('hi')
            // notifications.show({
            //     color: 'red',
            //     title: 'Notification with custom styles',
            //     message: 'It is red',
            // })
            alert(response)
        }
    }
    // if (user.isLoading) {
    //     return <Loader h={300} />
    // }
    // if (user.isError) {
    //     alert('Вы указали неправильный логин или пароль')
    // }
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


