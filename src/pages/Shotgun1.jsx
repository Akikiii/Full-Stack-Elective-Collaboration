import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompShotgun1 from '../components/CompShotgun1';



export class Shotgun1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompShotgun1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Shotgun1;