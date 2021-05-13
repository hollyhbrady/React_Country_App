import React from 'react'

const CountrySelectDisplay = ({selectedCountry, onButtonClick}) => {

    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>Region: {selectedCountry.region}</p>
            <img src={selectedCountry.flag}></img>
            <button onClick={onButtonClick}>Add to Favourite list!</button>
        </div>
    )

}

export default CountrySelectDisplay;