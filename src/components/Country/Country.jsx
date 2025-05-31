import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
  
    const { name, flags, population, region, area, capital } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area} km²</p>
            <button onClick={handleVisited} className='visited'>{visited ? "Visited" : "Going"}</button>

            {visited ? <p className='visited-message'>You have visited this country!</p> : <p className='not-visited-message'>You have not visited this country yet.</p>}   
           
        </div>
    );
};

export default Country;