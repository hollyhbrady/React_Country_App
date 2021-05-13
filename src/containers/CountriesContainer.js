import React, {useState, useEffect} from 'react';
import AllCountriesDisplay from '../components/AllCountriesDisplay';
import CountryItem from '../components/CountryItem';
import TotalPopulation from '../components/TotalPopulation'

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return (
        <div>
            <h1>Countries</h1>
            <TotalPopulation countries={countries}/>
            <AllCountriesDisplay countries={countries}/>
        </div>
    )

}

export default CountriesContainer;