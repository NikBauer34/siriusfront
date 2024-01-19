import React, { FC, useContext } from 'react';
import { Title, Text, Button, Container, Group } from '@mantine/core';
import './Error404.modules.css';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';


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
      <div className='label'>404</div>
      <Title className='title'>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className='description'>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center">
        <Button onClick={backHome} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}

export default Error404;