import React from "react";
import "./index.scss";
function Card({img, name, population, region, capital }) {
  return (
    <>
<div className="card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-content">
          <h4>{name}</h4>
          <p>
            <span>Population:</span>
            {population}
          </p>
          <p>
            <span>Region:</span>
            {region}
          </p>
          <p>
            <span>Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
