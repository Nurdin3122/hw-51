import React from 'react';
import "./numbers.css"

interface Props extends React.PropsWithChildren {
numbers: number;
}
const Numbers:React.FC<Props> = (props) => {
    return (
        <div className="number-block">
            <p className="number">{props.numbers}</p>
        </div>
    );
};
export default Numbers;
