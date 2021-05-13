import React from 'react';

const TotalPopulation = ({countries}) => {
    
    let total = countries.population.reduce((popTotal, country) => {popTotal += country}, 0)
        return <Total country={country}/>

    return (
            <h3>Total Population: {Total}</h3>
        )
         
}

export default TotalPopulation;