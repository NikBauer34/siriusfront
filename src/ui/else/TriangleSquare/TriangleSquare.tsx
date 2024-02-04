import { FC, ReactNode } from 'react';
import './TriangleSquare.modules.css';

interface TriangleSquareProps {
    firstTriangle: string;
    secondTriangle: string;
    children?: ReactNode;
}

const TriangleSquare: FC<TriangleSquareProps> = (props) => {
    return (
        <div className='commonForTriangle'>
            <div
                className='Triangles'
                style={{
                    borderTop: `${props.firstTriangle}`,
                    borderLeft: `${props.firstTriangle}`,
                    borderRight: `${props.secondTriangle}`,
                    borderBottom: `${props.secondTriangle}`
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

export default TriangleSquare;