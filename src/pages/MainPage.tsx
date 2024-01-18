import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import Statistics from '../components/Statistics';



const MainPage: FC = () => {
    return (
        <div>
            <YMap/>
            <PipeSelect></PipeSelect>
            {/* <Statistics></Statistics> */}
        </div>
    );
};

export default MainPage;