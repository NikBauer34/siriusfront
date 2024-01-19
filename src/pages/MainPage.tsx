import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import Statistics from '../components/Statistics';
import { Context } from '../main';
import { Loader } from '@mantine/core';



const MainPage: FC = () => {
    const {pipe} = useContext(Context)
    useEffect(() => {
        checkPipes()
    }, [pipe.userpipes, pipe.pipes])
    const checkPipes = async() => {
        pipe.checkPipes()
    }
    return (
        <>
            {pipe.isLoading
            ? <Loader h={300} />
            : <div>
                <PipeSelect></PipeSelect>
                <YMap/>
                
                {Object.keys(pipe.selectedpipe).length ? <Statistics /> : <h1>Заглушка</h1>}
            </div>
            }
        </>
    );
};

export default MainPage;