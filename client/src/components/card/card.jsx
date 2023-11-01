import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ country }) {
    const { cca3, name, flags, continents } = country;

    return (
        <div className='card'>
            <Link to={`/detail/${cca3}`}>
            <img src={flags.png} alt='' />
            </Link>

            <h2>{name?.common}</h2>
            <p>{continents.join(', ')}</p>
        </div>
    );
}

export default Card;
