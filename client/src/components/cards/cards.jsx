import React from 'react';
import Card from '../card/card';
import './cards.css'

function Cards({ countries }) {
    return (
        <div className='cards'>
            {countries?.map((country) => (
                <Card
                    key={country.cca3}
                    country={country}
                />
            ))}
        </div>
    );
}

export default Cards;