import React from 'react'

const CountrySelectDisplay = ({selectedCountry}) => {

    return (
        <div>
            <h3>{selectedCountry.name}</h3>
        </div>
    )

}

export default CountrySelectDisplay;