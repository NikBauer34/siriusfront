import React, { FC, useContext, useEffect, useState } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
// import { Context } from '../main';
// import { Loader, Button } from '@mantine/core';
import '../ui/styles/divMain.css';
import '../ui/styles/mainDivSelect.css';
import { Context } from '../main';
import { MapResponse } from '../modules/api';
import { Loader } from '@mantine/core';

const MainPage: FC = () => {
    const {pipe, user} = useContext(Context)
    const [userpipes] = useState<MapResponse[]>([] as MapResponse[])

    useEffect(() => {
        user.checkAuth()
        pipe.checkPipes()
    }, [])

    return (
        <>
            {/* <div className='divMain'> */}
                <React.Suspense fallback={<Loader h={300} />}>
                    <YMap/>
                </React.Suspense>
                <PipeSelect width='39%' className='mainDivSelect' mode='pipe' pipes={userpipes}/>
                {/* <Statistics /> */}
            {/* </div> */}

        </>
    );
};

export default MainPage;