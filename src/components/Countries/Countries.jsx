import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            
    }, []);

    const handleVisitedCountry = (country) => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <p>Visited Countries List: {visitedCountries.length}</p>
                <ul>
                    {
                        visitedCountries.map(country => <li key ={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
           <div className="countries-container">
             {
                countries.map(country => <Country key={country.name.common} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;