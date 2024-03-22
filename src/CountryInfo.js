import React from 'react';

function CountryInfo({ data }) {
  return (
    <div>
      <h2>Results:</h2>
      <div className="row">
        {data.map((country) => (
          <div key={country.cca3} className="col-sm-4 mb-3">
            <div className="card" style={{ width: "300px" }}>
              <img
                src={country.flags.png}
                className="card-img-top"
                alt="Flag"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryInfo;