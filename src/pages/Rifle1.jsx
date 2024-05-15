import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompRifle1 from '../components/CompRifle1';



export class Rifle1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompRifle1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Rifle1;