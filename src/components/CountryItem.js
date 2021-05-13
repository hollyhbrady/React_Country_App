import React from 'react';

const CountryItem = ({country}) => {


    return <li>
        {country.name} <br />
        Population: {country.population}
    </li>
        
}

export default CountryItem;