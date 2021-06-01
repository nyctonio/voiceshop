import Hero from '../boilerplate/Hero'
import Header from '../boilerplate/Header'
import Footer from '../boilerplate/Footer'
import Shop from '../boilerplate/Shop'
import React from 'react'

export default function Home() {
    return (
        <div  style={{"padding":"0px"}}>
            <Header />
            <Hero />
            <Shop/>
            <Footer />
        </div>
    )
}

