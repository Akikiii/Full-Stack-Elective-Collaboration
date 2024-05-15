import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompRifle2 from '../components/CompRifle2';



export class Rifle2 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompRifle2/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Rifle2;