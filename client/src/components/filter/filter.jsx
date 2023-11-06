import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByContinent } from '../../redux/actions';

function ContinentFilterSelect() {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        const selectedContinent = e.target.value;
        dispatch(filterByContinent(selectedContinent));
    };

    return (
        <div>
            <label htmlFor="continentFilter">Filter by Continent:</label>
            <select id="continentFilter" onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctica">Antarctica</option>
            </select>
        </div>
    );
}

export default ContinentFilterSelect;
