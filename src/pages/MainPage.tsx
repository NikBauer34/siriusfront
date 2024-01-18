import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import Statistics from '../components/Statistics';
import { Context } from '../main';



const MainPage: FC = () => {
    const {pipe} = useContext(Context)
    return (
        <div>
            <PipeSelect></PipeSelect>
            <YMap/>
            
            {Object.keys(pipe.selectedpipe).length ? <Statistics /> : <h1>Заглушка</h1>}
        </div>
    );
};

export default MainPage;