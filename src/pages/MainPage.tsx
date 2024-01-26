import React, { FC, useContext, useEffect, useState } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
// import { Context } from '../main';
// import { Loader, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '../ui/styles/divMain.css';
import '../ui/styles/mainDivSelect.css';
import { Context } from '../main';
import { MapResponse } from '../modules/api';

const MainPage: FC = () => {
    const {pipe, user} = useContext(Context)
    const [userpipes, setUserpipes] = useState<MapResponse[]>([] as MapResponse[])
    const NewUserPipe = (pipe: MapResponse) => {
        setUserpipes([...userpipes, pipe])
    }
    useEffect(() => {
        user.checkAuth()
        pipe.checkPipes()
    }, [])

    return (
        <>
            <div className='divMain'>
                {/* <React.Suspense fallback={<Loader h={300} />}> */}
                <YMap onModalConfirmed={(pipe: MapResponse) => NewUserPipe(pipe)}/>
                {/* </React.Suspense> */}
                <PipeSelect width='39%' className='mainDivSelect' mode='pipe' pipes={userpipes}/>
                {/* <Statistics /> */}
            </div>

        </>
    );
};

export default MainPage;