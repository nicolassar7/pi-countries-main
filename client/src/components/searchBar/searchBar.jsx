import React, { useState } from "react";
import './searchBar.css';

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const data = (value) => {
        const [name] = value.split(" ");
        fetch(`http://localhost:3001/countries?name=${name}`)
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((country) => {
                return (
                    country &&
                    country.name &&
                    country.name.common &&
                    country.name.common.toLowerCase().includes(name.toLowerCase())
                );
            });
            // Assuming setResults is a function to update the results in the parent component
            setResults(results);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    const handleChange = (value) => {
        setInput(value);
        data(value);
    };

    return (
        <div className="search">
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
