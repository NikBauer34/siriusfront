import React, { FC, useContext } from 'react';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import './Error404.modules.css';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import error404 from '../../img/404.png';

const Error404: FC = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate();
  const backHome = () => {
    user.setLoading(true)
    if (user.isAuth) {
      navigate('/main')
    } else {
      navigate('/login')
    }
    user.setLoading(false)
  }

  return (
    <Container className='root'>
      <div className='label'>
        <img src={error404} width={'400px'}/>
      </div>
      <Title className='title'>Вы нашли секретное место.</Title>
      <Text c="dimmed" size="lg" ta="center" className='description'>
        К сожалению, это всего лишь страница 404. Вы могли ошибиться в адресе сайта, или страница была перемещена на другой URL.
      </Text>
      <Group justify="center">
        <Button onClick={backHome} variant="subtle" size="md">
          Вернуться на главную страницу
        </Button>
      </Group>
    </Container>
  );
}

export default Error404;