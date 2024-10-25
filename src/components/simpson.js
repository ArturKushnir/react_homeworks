import React from 'react';
import './simpson.css';

const Simpson = ({name, surname, age, photo}) => {
    return (
        <div>
            <div className={'simpsons'}>
                <h2>{name} {surname} {age}</h2>
                <img src={photo} alt={name}/>
            </div>

        </div>

    );
};

export default Simpson;