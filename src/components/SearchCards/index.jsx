import React from "react";
import "./index.scss";
import Card from "../Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SearchCards() {
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("")
  useEffect(() => {
    GetFetch();
  }, []);
  async function GetFetch() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all ");
      const data = await res.json();
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  function handleRegion(countryregion) {
    setRegion(countryregion)
  }
  return (
    <>
      <section id="search">
        <div className="search_content">
          <div className="search_content_input">
            <div className="search_content_input_iconinp">
              <i className="fa-solid fa-magnifying-glass fa-fw"></i>
              <input
                type="text"
                placeholder="Search for a country..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </div>
          </div>
          <select value={region} name="region" id="region" onChange={(e)=>handleRegion(e.target.value)}>
            <option value="" >Filter by region</option>
            <option>Africa</option>
            <option >Asia</option>
            <option >Europe</option>
            <option >Ocenia</option>
          </select>
        </div>
      </section>
      <section id="country">
        <div className="cards">
          {country
            .filter((x) => x.name.common.toLowerCase().includes(input.toLowerCase()))
            .filter((x) => x.region.toString().includes(region))
            .map((x) =>
              <Link to={"/detail/name/" + x.name.common} ><Card img={x.flags.png} name={x.name.common} population={x.population} region={x.region} capital={x.capital} /></Link>
            )}
        </div>
      </section>
    </>

  );
}

export default SearchCards;
