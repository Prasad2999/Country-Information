import React, { useState } from 'react';

import CountryInfo from './CountryInfo';

function CountryInformation() {
  const [countryCurrency, setCountryCurrency] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!countryCurrency) {
      setError('The input field cannot be empty');
      setCountryData(null);
      return;
    }

    fetch(`https://restcountries.com/v3.1/currency/${countryCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setError("Country information is not Found");
          
          setCountryData(null);
        } else if (data.length === 0) {
          setError('Please enter a valid country currency.');
          setCountryData(null);
        } else {
          setError('');
          setCountryData(data);
        }
      })
      .catch(() => {
        setError('An error occurred while fetching data.');
        setCountryData(null);
      });
  };

  return (
    <div className="container">
		<h1>Search Countries By Currency</h1>
      <div className="search">
        <input
          type="text"
          id="countryName"
          placeholder="Search By Currency Here..."
          value={countryCurrency}
          onChange={(e) => setCountryCurrency(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div id="result">
        {error && <h3>{error}</h3>}
        {countryData && <CountryInfo data={countryData} />}
      </div>
    </div>
  );
}

export default CountryInformation;