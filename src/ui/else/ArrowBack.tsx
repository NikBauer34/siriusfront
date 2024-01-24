import { IconArrowLeft } from '@tabler/icons-react';
import React, { FC } from 'react';
import '../../ui/styles/divForIconArrowLeft.css';

interface arrowbackprops{
    onClick: () => void;

}

const ArrowBack: FC<arrowbackprops> = (props) => {
    return (
        <div className='divForIconArrowLeft'>
            <IconArrowLeft />
            <span style={{width:'max-content'}} onClick={props.onClick}>Вернуться назад</span>
        </div>  
    );
};

export default ArrowBack;