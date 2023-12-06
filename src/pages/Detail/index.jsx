import React from 'react'
import { useState, useEffect } from 'react';
import "./index.scss";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Detail = () => {
    let { name } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        GetFetch();
    }, []);
    async function GetFetch() {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const data = await res.json();
            console.log(data);
            setDetails(data[0]);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
         <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <section id='detail'>
                <div className='detail_page'>
                <Link to={"/"}><button><i class="fa-solid fa-arrow-left"></i>Back</button></Link>
                <div className='detail_content'>
                    <div className='detail_content_img'>
                        <img src={details.flags?.png} alt="" />
                    </div>
                    <div className='detail_content_text'>
                        <h2>{details.name?.common}</h2>
                        <div className='detail_content_text_p' >
                            <p><span>Native Name:</span>{details.name?.official}</p>
                            <p><span>Population:</span>{details.population}</p>
                            <p><span>Region:</span>{details.region}</p>
                            <p><span>Sub Region:</span>{details.subregion}</p>
                            <p><span>Capital:</span>{details.capital}</p>
                            <p><span>Top Level Domain:</span>{details.tld}</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default Detail