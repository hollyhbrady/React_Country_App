import React from 'react';
import CountryItem from './CountryItem';

const AllCountriesDisplay = ({countries, onCountryClick}) => {

    const countriesList = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountryClick={onCountryClick}/>
    })

    return (
        <ul>
            {countriesList}
        </ul>
    )
}



export default AllCountriesDisplay;