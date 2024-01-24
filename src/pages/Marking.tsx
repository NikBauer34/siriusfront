import React, { FC } from 'react';
import PipeSelect from '../components/PipeSelect';



const Marking: FC = () => {

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ width: '100%' }}>
                <PipeSelect mode='magnetogram' />
            </div>
        </div>
    );
};

export default Marking;