import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
// import { Context } from '../main';
// import { Loader, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '../ui/styles/divMain.css';
import '../ui/styles/mainDivSelect.css';

const MainPage: FC = () => {
    // const { pipe, user, page } = useContext(Context)
    const navigate = useNavigate()
    // useEffect(() => {
    //     console.log('observer')
    // }, [pipe.userpipes])
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
            <div className='divMain'>
                {/* <React.Suspense fallback={<Loader h={300} />}> */}
                <YMap />
                {/* </React.Suspense> */}
                <PipeSelect width='39%' className='mainDivSelect' mode='pipe' />
                {/* <Statistics /> */}
            </div>

        </>
    );
};

export default MainPage;