import React from 'react'
import SearchCards from '../../components/SearchCards'
import "./index.scss";
import { Helmet } from 'react-helmet-async';
function Home() {
  return (
    <>
    <Helmet>
        <title>Country</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <section id='home'>
    <SearchCards/>
    </section>
    </>
  )
}

export default Home