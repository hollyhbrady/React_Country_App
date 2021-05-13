import React from 'react';
import CountryItem from './CountryItem';

const AllCountriesDisplay = ({countries}) => {

    const countriesList = countries.map((country, index) => {
        return <CountryItem country={country} key={index}/>
    })

    return (
        <ul>
            {countriesList}
        </ul>
    )
}



export default AllCountriesDisplay;