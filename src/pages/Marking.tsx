import React, { FC } from 'react';
import PipeSelect from '../components/PipeSelect';
import '../ui/styles/mainDivSelect.css';


const Marking: FC = () => {
    return (
        <>
            <PipeSelect className='mainDivSelect' mode='magnetogram' />
        </>
    );
};

export default Marking;