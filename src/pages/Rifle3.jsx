import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompRifle3 from '../components/CompRifle3';



export class Rifle3 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompRifle3/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Rifle3;