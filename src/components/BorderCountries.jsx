import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BorderCountries = ({ borders }) => {
    const [borderCountryNames, setBorderCountryNames] = useState([]);

    const getBorderCountryNames = async (borders) => {
        const borderCountries = await Promise.all(
            borders.map(async (border) => {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
                const data = await response.json();
                return data[0].name.common; // Get the full name of the country
            })
        );
        return borderCountries;
    };

    useEffect(() => {
        if (borders && borders.length > 0) {
            getBorderCountryNames(borders).then(setBorderCountryNames);
        }
    }, [borders]);

    return (
        <div className='mt-14 '>
            <h2 className="font-Ns-bold text-lg">Border Countries:</h2>
            <div className="flex flex-wrap gap-2">
                {borderCountryNames.length > 0 ? (
                    borderCountryNames.map((borderCountry, index) => (
                        <button key={index} className="hover:scale-110 transition-all duration-200 ease-in-out bg-light-mode-element dark:bg-dark-mode-element text-light-mode-text dark:text-dark-mode-text rounded-md px-4 py-2 shadow-md hover:bg-gray-200 dark:hover:bg-gray-700">
                            <Link to={`/country/${borderCountry.toLowerCase().replace(/\s+/g, '-')}`}>{borderCountry}</Link>
                        </button>
                    ))
                ) : (
                    <p>No border countries</p>
                )}
            </div>
        </div>
    );
};

export default BorderCountries; 