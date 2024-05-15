import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompRifle4 from '../components/CompRifle4';



export class Rifle4 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompRifle4/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Rifle4;