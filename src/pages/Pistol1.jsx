import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CompPistol1 from '../components/CompPistol1';



export class Pistol1 extends Component {
    render() {
        return (

        <>
        <Header/>
        <div className="bg-[#ffffff] w-full h-full pt-24">

            <CompPistol1/>

        </div>
        <Footer/>
        </>
        
        )
    }
}

export default Pistol1;