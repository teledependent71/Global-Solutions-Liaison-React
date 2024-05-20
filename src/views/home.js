import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Solutions Liaison</title>
        <meta property="og:title" content="Global Solutions Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
