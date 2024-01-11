import React, { FC, useContext } from 'react'
import { useForm } from '@mantine/form';
import { Box, Button, NativeSelect, PasswordInput, TextInput } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { Context } from '../../../main.tsx';
const FormComp: FC = () => {
  const {user} = useContext(Context)
  const location = useLocation()
  const form = useForm({
    initialValues: { name: '', surname: '', nikname: '', password: '', role: 'первая ступень'},
    validateInputOnChange: true,
    validate: {
      name: (value) => (value.length < 2 ? 'Имя должно состоять хотя-бы из 2 букв' : null),
      surname: (value) => (value.length < 2 ? 'Фамилия должна состоять хотя-бы из 2 букв' : null),
      nikname: (value) => (value.length < 5 ? 'Никнейм должен состоять хотя-бы из 5 символов' : null),
      password: (value) => (value.length < 5 ? 'Пароль дожен состоять хотя-бы из 5 символов' : null),
    }
  })
  const FormSubmit = (val: any) => {
    const {name, surname, nikname, password, role} = val
    if (location.pathname == '/login') {
      user.login(nikname, password)
    } else if (location.pathname == '/registration') {
      user.registration(name, surname, nikname, password, role)
    }
  }
  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((value) => FormSubmit(value))}>
        <TextInput label="Имя" placeholder='Введите здесь...' {...form.getInputProps('name')}></TextInput>
        <TextInput label="Фамилия" placeholder='Введите здесь...' {...form.getInputProps('surname')}></TextInput>
        <TextInput label="Никнейм" placeholder='Введите здесь...' {...form.getInputProps('nikname')}></TextInput>
        <PasswordInput label="Пароль" placeholder='Введите здесь...' {...form.getInputProps('password')}></PasswordInput>
        <NativeSelect label="Пароль" {...form.getInputProps('role')} data={['первая ступень', 'вторая ступень']}></NativeSelect>

        <Button type="submit" mt="sm">
          Сабмит
        </Button>
      </form>
    </Box>
  )
}
export default FormComp