import React, { FC, useContext, useEffect } from 'react';
import { YMap } from '../components';
import PipeSelect from '../components/PipeSelect';
import { Context } from '../main';

const MainPage: FC = () => {
    return (
        <div>
            <YMap/>
            <PipeSelect></PipeSelect>
        </div>
    );
};

export default MainPage;