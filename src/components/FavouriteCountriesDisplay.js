import React from 'react';

const FavouriteCountriesDisplay = (selectedCountry, favouriteCountries) => {

    const favList = favouriteCountries.map((country, index) => {
        return <faveItem country={country} key={index} />
    })

    return (
        <ul>
            {favList}
        </ul>
    )
}

export default FavouriteCountriesDisplay;

// const countriesList = countries.map((country, index) => {
//     return <CountryItem country={country} key={index} onCountryClick={onCountryClick}/>
// })

// return (
//     <ul>
//         {countriesList}
//     </ul>
// )