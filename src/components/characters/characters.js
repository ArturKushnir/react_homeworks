import React from 'react';
import './characters.css';
/*Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
https://rickandmortyapi.com/api/character
Створити 6 персонажів.*/
const Characters = ({id, name, status, species, gender, image}) => {
    return (
        <div className={'characters'}>
            <h2>{id} {name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>species: {species}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Characters;