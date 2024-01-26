import React, { FC } from 'react';
import PipeSelect from '../components/PipeSelect';
import '../ui/styles/mainDivSelect.css';


const Marking: FC = () => {
    return (
        <>
            <PipeSelect width='50%' className='mainDivSelect' mode='magnetogram' />
        </>
    );
};

export default Marking;