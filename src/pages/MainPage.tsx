import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import { Context } from '../main';
import { Loader, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';



const MainPage: FC = () => {
    // const { pipe, user, page } = useContext(Context)
    const navigate = useNavigate()
    // useEffect(() => {
    //     checkPipes()
    // }, [pipe.userpipes, pipe.pipes])
    // useEffect(() => {
    //     page.setLoading(false)
    //     checkPipes()
    // }, [])
    // const checkPipes = () => {
    //     user.checkAuth()
    //     pipe.checkPipes()
    // }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                {/* <React.Suspense fallback={<Loader h={300} />}> */}
                <YMap />
                {/* </React.Suspense> */}
                <PipeSelect mode='pipe' />
                {/* <Statistics /> */}
            </div>

        </>
    );
};

export default MainPage;