import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import { Context } from '../main';
import { Loader, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';



const MainPage: FC = () => {
    const { pipe, user } = useContext(Context)
    const navigate = useNavigate()
    // useEffect(() => {
    //     checkPipes()
    // }, [pipe.userpipes, pipe.pipes])
    useEffect(() => {
        checkPipes()
    }, [])
    const checkPipes = async () => {
        pipe.setLoading(true)
        await user.checkAuth()
        await pipe.checkPipes()
        pipe.setLoading(false)
    }

    return (
        <>
                {pipe.isLoading
                ? <Loader h={300} />
                : <div>
                    <React.Suspense fallback={<Loader h={300} />}>
                        <YMap/>
                    </React.Suspense>
                    <PipeSelect mode='pipe'/>
                    {/* <Statistics /> */}
                </div>
                }
        </>
    );
};

export default MainPage;