import React from 'react';

const TotalPopulation = ({countries}) => {
    
    let total = countries.reduce((popTotal, country) => {
        popTotal += country.population
        return popTotal
    }, 0)
        
    return (
        <h3>Total Population: {total}</h3>
    )     
}

export default TotalPopulation;