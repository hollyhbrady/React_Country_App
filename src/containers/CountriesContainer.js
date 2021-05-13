import React, {useState, useEffect} from 'react';
import AllCountriesDisplay from '../components/AllCountriesDisplay';
import CountryItem from '../components/CountryItem';
import TotalPopulation from '../components/TotalPopulation';
import CountrySelectDisplay from '../components/CountrySelectDisplay';
import FavouriteCountriesDisplay from '../components/FavouriteCountriesDisplay'

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }

    const onCountryClick = function (country) {
        setSelectedCountry(country);
    }

    const onButtonClick = function() {
        setFavouriteCountries([...favouriteCountries, selectedCountry])
    }

    return (
        <div>
            <h1>Countries</h1>
            <TotalPopulation countries={countries}/>
            {selectedCountry ? <CountrySelectDisplay selectedCountry={selectedCountry} onButtonClick={onButtonClick}/> : null}
            <h2>Favourite Countries:</h2>
            <FavouriteCountriesDisplay favouriteCountries={favouriteCountries}/>
            <AllCountriesDisplay countries={countries} onCountryClick={onCountryClick} />
        </div>
    )

}

export default CountriesContainer;