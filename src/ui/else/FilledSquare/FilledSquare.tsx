import { FC, ReactNode } from 'react';
import './FilledSquare.modules.css';

interface FilledSquareProps{
    background: string;
    children?: ReactNode;
}

const FilledSquare: FC<FilledSquareProps> = (props) => {
    return (
        <div style={{background:`${props.background}`}} className='filledSquare'>{props.children}</div>
    );
};

export default FilledSquare;