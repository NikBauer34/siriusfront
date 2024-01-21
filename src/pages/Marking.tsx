import React, { FC } from 'react';
import PipeSelect from '../components/PipeSelect';
import { FilledSquare, TriangleSquare } from '../ui';


const Marking: FC = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <header style={{width:'100%'}}>
                <PipeSelect mode='magnetogram'/>
                {/* пример использования квадратов: 
                 <FilledSquare background='grey'/> 
                 <TriangleSquare 
                    firstTriangle='10px solid blue'
                    secondTriangle='10px solid grey'
                /> */}
            </header>
        </div>
    );
};

export default Marking;