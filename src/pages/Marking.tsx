import React, { FC } from 'react';
import PipeSelect from '../components/PipeSelect';
import '../ui/styles/mainDivSelect2.css';


const Marking: FC = () => {
    return (
        <>
            <PipeSelect className='mainDivSelect2' mode='magnetogram' />
        </>
    );
};

export default Marking;