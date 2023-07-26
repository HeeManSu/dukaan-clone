import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Features from '../Components/Features'
import Benefits from '../Components/Benefits'
import Theme from '../Components/Theme'
import Plugins from '../Components/Plugins'
import Data from '../Components/Data'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Carousel />
            <Features />
            <Benefits />
            <Theme />
            <Plugins />
            <Data />
        </div>
    )
}

export default Homepage